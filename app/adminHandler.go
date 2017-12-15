package app

import (
	"bytes"
	"encoding/json"
	"github.com/codeskyblue/go-sh"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/julienschmidt/httprouter"
	"html/template"
	"net/http"
)

func IsAdmin(w http.ResponseWriter, r *http.Request) (isAdminFlag bool) {

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

	var response Response
	var admin_request AdminRequest
	var admin Admin

	if IsAdmin(w, r) {

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

	var response Response
	var admin_request AdminRequest

	if IsAdmin(w, r) == true {

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

	var response Response
	var admin Admin

	if IsAdmin(w, r) == true {

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
		panic(err)
	}
	if IsAdmin(w, r) {

		if DB.db.Debug().Where("access_request_id = ?", ps.ByName("id")).First(&access_request).RecordNotFound() {
			response = Response{
				false,
				"Unable to accept, request does not exists",
			}
		} else {

			// test ssh connection b/w source and dest servers
			status, _ := sh.Command("./scripts/test_connection.sh", receive.IP).Output()

			if !bytes.Equal(status, []byte("ok\n")) {
				response = Response{
					false,
					"Can't connect using ssh, check if destination server has been set up correctly",
				}

			} else {

				DB.db.Debug().Where("access_request_id = ?", ps.ByName("id")).First(&access_request)

				// execute shell script to copy ssh key to specified server
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

	var response Response
	var access_request AccessRequest

	if IsAdmin(w, r) == true {

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

	var response Response
	var access Access

	if IsAdmin(w, r) == true {

		if DB.db.Debug().Where("access_id = ?", ps.ByName("id")).First(&access).RecordNotFound() {
			response = Response{
				false,
				"Unable to delete, access does not exists",
			}
		} else {

			// test ssh connection b/w source and dest servers
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

func AccessesHandler(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var accesses []Access

	if IsAdmin(w, r) == true {
		DB.db.Find(&accesses)
		json, err := json.Marshal(accesses)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		response = Response{
			true,
			string(json),
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

func AccessRequestsHandler(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var access_requests []AccessRequest

	if IsAdmin(w, r) == true {
		DB.db.Find(&access_requests)
		json, err := json.Marshal(access_requests)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		response = Response{
			true,
			string(json),
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

func AdminsHandler(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var admins []Admin

	if IsAdmin(w, r) == true {
		DB.db.Find(&admins)
		json, err := json.Marshal(admins)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		response = Response{
			true,
			string(json),
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

func AdminRequestsHandler(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var admin_requests []AdminRequest

	if IsAdmin(w, r) == true {
		DB.db.Find(&admin_requests)
		json, err := json.Marshal(admin_requests)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		response = Response{
			true,
			string(json),
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
