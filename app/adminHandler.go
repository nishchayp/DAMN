package app

import (
	"encoding/json"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"net/http"
)

func IsAdmin(w http.ResponseWriter, r *http.Request) (isAdminFlag bool) {

	googTok := ReadCookieHandler(w, r)

	var admin Admin

	notFoundErr := DB.db.Debug().Where("email = ?", googTok.Email).First(&admin).Error
	if notFoundErr == nil {
		return true
	} else {
		return false
	}
}

func LoginAdmin(w http.ResponseWriter, r *http.Request) {

	var response Response

	if IsAdmin(w, r) != true {
		response = Response{
			false,
			"User not admin",
		}
	} else {
		response = Response{
			true,
			"A restricted admin route",
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
