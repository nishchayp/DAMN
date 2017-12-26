package app

import (
	"net/http"
	"time"

	"github.com/gorilla/securecookie"
)

/*
** contains all middleware fuctions to interact with cookies
 */

var cookieHandler = securecookie.New(
	securecookie.GenerateRandomKey(64),
	securecookie.GenerateRandomKey(32))

func SetCookieHandler(googTok *GoogleToken, w http.ResponseWriter) {

	if encoded, err := cookieHandler.Encode("googCookie", googTok); err == nil {
		cookie := &http.Cookie{
			Name:    "googCookie",
			Value:   encoded,
			Path:    "/",
			Expires: time.Now().Add(12 * time.Hour),
		}
		http.SetCookie(w, cookie)
	}
}

func ReadCookieHandler(w http.ResponseWriter, r *http.Request) (googTok GoogleToken) {
	if cookie, err := r.Cookie("googCookie"); err == nil {
		if err = cookieHandler.Decode("googCookie", cookie.Value, &googTok); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
		}
	}
	return googTok
}

func ClearCookieHandler(w http.ResponseWriter) {

	cookie := &http.Cookie{
		Name:   "googCookie",
		Value:  "",
		Path:   "/",
		MaxAge: -1,
	}
	http.SetCookie(w, cookie)
}
