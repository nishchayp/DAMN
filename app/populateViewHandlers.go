package app

import (
	"encoding/json"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/julienschmidt/httprouter"
	"net/http"
)

/*
** contains handler fuctions which require admin account
** contains fuctions to populate views in admin portal
 */

func AccessesHandler(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	// fetches data from accesses table in db

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

	// fetches data from access_requests table in db

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

	// fetches data from admins table in db

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

	// fetches data from admin_requests table in db

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
