package app

import (
	"bytes"
	"encoding/json"
	"html/template"
	"log"
	"net/http"

	"github.com/codeskyblue/go-sh"
	_ "github.com/jinzhu/gorm/dialects/sqlite" // Driver for sqlite

	"github.com/julienschmidt/httprouter"

)

// IsAdmin : Read cookie and check db if email exists in admins table
func IsAdmin(w http.ResponseWriter, r *http.Request) (isAdminFlag bool) {

	googTok := ReadCookieHandler(w, r)
	var admin Admin

	if DB.db.Where("email = ?", googTok.Email).First(&admin).RecordNotFound() {
		return false
	}

	return true
}

// AdminIndex :
func AdminIndex(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	if IsAdmin(w, r) != true {
		http.Redirect(w, r, "/", 302)
	} else {
		var adminTemplate *template.Template
		adminTemplate = template.Must(template.ParseGlob("templates/admin.html"))
		adminTemplate.Execute(w, nil)
	}

}


// AcceptAdminRequest : Lets admin accept request to give a user admin privilege
func AcceptAdminRequest(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var adminRequest AdminRequest
	var admin Admin

	if IsAdmin(w, r) {

		// gives admin privilege to user by adding entry to admins table
		// while deleting entry from admin_requests table
		if DB.db.Where("admin_request_id = ?", ps.ByName("id")).First(&adminRequest).RecordNotFound() {
			response = Response{
				false,
				"Unable to accept, request does not exists",
			}
		} else {
			DB.db.Where("admin_request_id = ?", ps.ByName("id")).First(&adminRequest)
			admin = Admin{
				Name:  adminRequest.Name,
				Email: adminRequest.Email,
			}
			DB.db.Create(&admin)
			DB.db.Delete(&adminRequest)

			response = Response{
				true,
				"Request accepted, new admin created",
			}
			log.Printf("New admin created. Name: %v | Email: %v", admin.Name, admin.Email)
		}

	} else {
		response = Response{
			false,
			"User not admin",
		}
	}

	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)

}

// RejectAdminRequest : :Lets admin reject request to give a user admin privilege
func RejectAdminRequest(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var adminRequest AdminRequest

	if IsAdmin(w, r) == true {

		// deletes entry from admin_requests table
		if DB.db.Where("admin_request_id = ?", ps.ByName("id")).First(&adminRequest).RecordNotFound() {
			response = Response{
				false,
				"Unable to delete, request does not exists",
			}
		} else {
			DB.db.Where("admin_request_id = ?", ps.ByName("id")).Delete(&adminRequest)
			response = Response{
				true,
				"Admin request successfully rejected",
			}
		}

	} else {
		response = Response{
			false,
			"User not admin",
		}
	}

	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)

}

// RevokeAdminPrivilege : Lets admin revoke admin privileges of fellow admin
func RevokeAdminPrivilege(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var admin Admin

	if IsAdmin(w, r) == true {

		// deletes entry from admins table
		if DB.db.Where("admin_id = ?", ps.ByName("id")).First(&admin).RecordNotFound() {
			response = Response{
				false,
				"Unable to delete, admin does not exists",
			}
		} else {
			log.Printf("An admin's privileges revoked. Name: %v | Email: %v", admin.Name, admin.Email)
			DB.db.Where("admin_id = ?", ps.ByName("id")).Delete(&admin)
			response = Response{
				true,
				"Admin privileges successfully revoked",
			}
		}

	} else {
		response = Response{
			false,
			"User not admin",
		}
	}

	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)

}


// AcceptAccessRequest : Lets admin accept access request
// copies user's ssh key to destination server
// request contains IP Address of the server
// to which access needs to be granted
func AcceptAccessRequest(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	type Receive struct {
		IP string `json:"ip"`
	}

	var receive Receive
	var response Response
	var accessRequest AccessRequest
	var access Access

	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&receive)
	if err != nil {
		http.Error(w, "Error reading the received request", http.StatusBadRequest)
		log.Printf("Error reading the received request.\nError: %v\n", err.Error())
	}
	if IsAdmin(w, r) {

		// gives access privilege to user by adding entry to accesses table
		// executes shell script which copies user's ssh key to desired dest server over ssh
		// while deleting entry from access_requests table
		if DB.db.Where("access_request_id = ?", ps.ByName("id")).First(&accessRequest).RecordNotFound() {
			response = Response{
				false,
				"Unable to accept, request does not exists",
			}
		} else {

			// test ssh connection b/w source(DAMN server) and dest servers
			status, _ := sh.Command("./scripts/test_connection.sh", receive.IP).Output()

			if !bytes.Equal(status, []byte("ok\n")) {
				response = Response{
					false,
					"Can't connect using ssh, check if destination server has been set up correctly",
				}

			} else {

				DB.db.Where("access_request_id = ?", ps.ByName("id")).First(&accessRequest)

				// execute shell script to copy ssh key to specified server over ssh
				sh.Command("./scripts/copy_key_to_server.sh", receive.IP, accessRequest.SSHKey).Run()

				access = Access{
					Name:   accessRequest.Name,
					Email:  accessRequest.Email,
					IP:     receive.IP,
					SSHKey: accessRequest.SSHKey,
				}
				DB.db.Create(&access)
				DB.db.Delete(&accessRequest)

				response = Response{
					true,
					"Request accepted, new access created",
				}

				log.Printf("New access granted. Name: %v | Email: %v | To: %v", access.Name, access.Email, access.IP)

			}

		}

	} else {
		response = Response{
			false,
			"User not admin",
		}
	}

	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)

}

// RejectAccessRequest : Lets admin reject access request
func RejectAccessRequest(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var accessRequest AccessRequest

	if IsAdmin(w, r) == true {

		// deletes entry from access_requests table
		if DB.db.Where("access_request_id = ?", ps.ByName("id")).First(&accessRequest).RecordNotFound() {
			response = Response{
				false,
				"Unable to delete, request does not exists",
			}
		} else {
			DB.db.Where("access_request_id = ?", ps.ByName("id")).Delete(&accessRequest)
			response = Response{
				true,
				"Access request successfully rejected",
			}
		}

	} else {
		response = Response{
			false,
			"User not admin",
		}
	}

	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)

}

// RevokeAccessPrivilege : Lets admin revoke access privileges of users
func RevokeAccessPrivilege(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var access Access

	if IsAdmin(w, r) == true {

		// revokes access privilege to user by deleting entry from accesses table
		// executes shell script which removes user's ssh key from intended dest server over ssh
		if DB.db.Where("access_id = ?", ps.ByName("id")).First(&access).RecordNotFound() {
			response = Response{
				false,
				"Unable to delete, access does not exists",
			}
		} else {

			// test ssh connection b/w source(DAMN server) and dest servers
			status, _ := sh.Command("./scripts/test_connection.sh", access.IP).Output()

			if !bytes.Equal(status, []byte("ok\n")) {

				response = Response{
					false,
					"Can't connect using ssh, check if destination server has been set up correctly",
				}

			} else {

				log.Printf("Access privilege revoked. Name: %v | Email: %v | From: %v", access.Name, access.Email, access.IP)

				DB.db.Where("access_id = ?", ps.ByName("id")).Delete(&access)
				// execute shell script to remove ssh key from the specified server
				sh.Command("./scripts/remove_key_from_server.sh", access.IP, access.SSHKey).Run()

				response = Response{
					true,
					"Access privileges successfully revoked",
				}
			}
		}

	} else {
		response = Response{
			false,
			"User not admin",
		}
	}

	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)

}
