package app

import (
	"bytes"
	"encoding/json"
	"github.com/codeskyblue/go-sh"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/julienschmidt/httprouter"
	"html/template"
	"log"
	"net/http"
)

func IsAdmin(w http.ResponseWriter, r *http.Request) (isAdminFlag bool) {

	// read cookie and check db if email exists in admins table

	googTok := ReadCookieHandler(w, r)

	var admin Admin

	if DB.db.Debug().Where("email = ?", googTok.Email).First(&admin).RecordNotFound() {
		return false
	} else {
		return true
	}
}

func AdminIndex(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	if IsAdmin(w, r) != true {
		http.Redirect(w, r, "/", 302)
	} else {
		var adminTemplate *template.Template
		adminTemplate = template.Must(template.ParseGlob("templates/admin.html"))
		adminTemplate.Execute(w, nil)
	}

}

func AcceptAdminRequest(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	// lets admin accept request to give a user admin privilege

	var response Response
	var admin_request AdminRequest
	var admin Admin

	if IsAdmin(w, r) {

		// gives admin privilege to user by adding entry to admins table
		// while deleting entry from admin_requests table
		if DB.db.Debug().Where("admin_request_id = ?", ps.ByName("id")).First(&admin_request).RecordNotFound() {
			response = Response{
				false,
				"Unable to accept, request does not exists",
			}
		} else {
			DB.db.Debug().Where("admin_request_id = ?", ps.ByName("id")).First(&admin_request)
			admin = Admin{
				Name:  admin_request.Name,
				Email: admin_request.Email,
			}
			DB.db.Create(&admin)
			DB.db.Delete(&admin_request)

			response = Response{
				true,
				"Request accepted, new admin created",
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

func RejectAdminRequest(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	// lets admin reject request to give a user admin privilege

	var response Response
	var admin_request AdminRequest

	if IsAdmin(w, r) == true {

		// deletes entry from admin_requests table
		if DB.db.Debug().Where("admin_request_id = ?", ps.ByName("id")).First(&admin_request).RecordNotFound() {
			response = Response{
				false,
				"Unable to delete, request does not exists",
			}
		} else {
			DB.db.Debug().Where("admin_request_id = ?", ps.ByName("id")).Delete(&admin_request)
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

func RevokeAdminPrivilege(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	// lets admin revoke admin privileges of fellow admin

	var response Response
	var admin Admin

	if IsAdmin(w, r) == true {

		// deletes entry from admins table
		if DB.db.Debug().Where("admin_id = ?", ps.ByName("id")).First(&admin).RecordNotFound() {
			response = Response{
				false,
				"Unable to delete, admin does not exists",
			}
		} else {
			DB.db.Debug().Where("admin_id = ?", ps.ByName("id")).Delete(&admin)
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

func AcceptAccessRequest(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	// lets admin accept access request
	// copies user's ssh key to destination server

	// request contains IP Address of the server
	// to which access needs to be granted
	type Receive struct {
		IP string `json:"ip"`
	}

	var receive Receive
	var response Response
	var access_request AccessRequest
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
		if DB.db.Debug().Where("access_request_id = ?", ps.ByName("id")).First(&access_request).RecordNotFound() {
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

				DB.db.Debug().Where("access_request_id = ?", ps.ByName("id")).First(&access_request)

				// execute shell script to copy ssh key to specified server over ssh
				sh.Command("./scripts/copy_key_to_server.sh", receive.IP, access_request.SshKey).Run()

				access = Access{
					Name:   access_request.Name,
					Email:  access_request.Email,
					IP:     receive.IP,
					SshKey: access_request.SshKey,
				}
				DB.db.Create(&access)
				DB.db.Delete(&access_request)

				response = Response{
					true,
					"Request accepted, new access created",
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

func RejectAccessRequest(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	// lets admin reject access request

	var response Response
	var access_request AccessRequest

	if IsAdmin(w, r) == true {

		// deletes entry from access_requests table
		if DB.db.Debug().Where("access_request_id = ?", ps.ByName("id")).First(&access_request).RecordNotFound() {
			response = Response{
				false,
				"Unable to delete, request does not exists",
			}
		} else {
			DB.db.Debug().Where("access_request_id = ?", ps.ByName("id")).Delete(&access_request)
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

func RevokeAccessPrivilege(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	// lets admin revoke access privileges of users

	var response Response
	var access Access

	if IsAdmin(w, r) == true {

		// revokes access privilege to user by deleting entry from accesses table
		// executes shell script which removes user's ssh key from intended dest server over ssh
		if DB.db.Debug().Where("access_id = ?", ps.ByName("id")).First(&access).RecordNotFound() {
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

				DB.db.Debug().Where("access_id = ?", ps.ByName("id")).Delete(&access)

				// execute shell script to remove ssh key from the specified server
				sh.Command("./scripts/remove_key_from_server.sh", access.IP, access.SshKey).Run()

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
