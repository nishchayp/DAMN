package app

import (
	"encoding/json"
	"github.com/gorilla/securecookie"
	"net/http"
	"time"
)

var cookieHandler = securecookie.New(
	securecookie.GenerateRandomKey(64),
	securecookie.GenerateRandomKey(32))

func getUID(r *http.Request) (uid uint) {
	if cookie, err := r.Cookie("session"); err == nil {
		if err = cookieHandler.Decode("session", cookie.Value, &uid); err == nil {
		}
	}
	return uid
}

func isLoggedIn(r *http.Request) (flag bool) {
	uid := getUID(r)
	if uid != 0 {
		flag = true
	} else {
		flag = false
	}
	return flag
}

func setSession(uid uint, w http.ResponseWriter) {
	// IMO here would be the code to
	// create new entry in session table in db
	/*var session Session
	session = Session{UserID: uid, LoginTimeStamp: time.Now()}
	db.Create(&session)*/

	if encoded, err := cookieHandler.Encode("session", uid); err == nil {
		cookie := &http.Cookie{
			Name:    "session",
			Value:   encoded,
			Path:    "/",
			Expires: time.Now().Add(12 * time.Hour),
		}
		http.SetCookie(w, cookie)
	}
}

func clearSession(w http.ResponseWriter) {
	// IMO here would be the code to
	// delete the session from the sessions table in db
	cookie := &http.Cookie{
		Name:   "session",
		Value:  "",
		Path:   "/",
		MaxAge: -1,
	}
	http.SetCookie(w, cookie)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {

	if r.Method != "POST" {
		return
	}

	type Receive struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	type Response struct {
		Success bool   `json:"success"`
		Message string `json:"message"`
	}

	/**** check credentials ****/
	var user User

	decoder := json.NewDecoder(r.Body)
	var receive Receive
	err := decoder.Decode(&receive)
	if err != nil {
		panic(err)
	}

	// check for email
	notFoundErr := db.Debug().Where("email = ?", receive.Email).First(&user).Error

	if notFoundErr != nil {
		//json for incorrect email or pw
		response := &Response{
			false,
			"Incorrect email or password",
		}

		json, err := json.Marshal(response)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(json)
		return
	}

	// check for password
	if user.Password != receive.Password {
		//json for incorrect email or pw
		response := &Response{
			false,
			"Incorrect email or password",
		}

		json, err := json.Marshal(response)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(json)
		return

	}

	// credentials checked
	setSession(user.ID, w)

	response := &Response{
		true,
		"User logged in",
	}

	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}

func logoutHandler(w http.ResponseWriter, r *http.Request) {

	type Response struct {
		Success bool   `json:"success"`
		Message string `json:"message"`
	}

	if !(isLoggedIn(r)) {

		response := &Response{
			false,
			"Unautorized, login required",
		}

		json, err := json.Marshal(response)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(json)

		return
	}

	clearSession(w)

	response := &Response{true, "User logged out"}

	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}
