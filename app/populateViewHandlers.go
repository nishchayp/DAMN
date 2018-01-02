package app

import (
	"encoding/json"
	"net/http"

	_ "github.com/jinzhu/gorm/dialects/sqlite" //Driver for SQLite
	"github.com/julienschmidt/httprouter"

)

/*
** contains handler fuctions which require admin account
** contains fuctions to populate views in admin portal
 */

// AccessesHandler : fetches data from accesses table in db
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

// AccessRequestsHandler : fetches data from access_requests table in db
func AccessRequestsHandler(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var accessRequests []AccessRequest

	if IsAdmin(w, r) == true {
		DB.db.Find(&accessRequests)
		json, err := json.Marshal(accessRequests)
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

// AdminsHandler : fetches data from admins table in db
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

// AdminRequestsHandler : fetches data from admin_requests table in db
func AdminRequestsHandler(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var response Response
	var adminRequests []AdminRequest

	if IsAdmin(w, r) == true {
		DB.db.Find(&adminRequests)
		json, err := json.Marshal(adminRequests)
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
