package app

import (
	"net/http"
)

func Run() {
	http.HandleFunc("/", Index)

	http.ListenAndServe(":8080", nil)
}
