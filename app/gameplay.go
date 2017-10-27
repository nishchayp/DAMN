package app

import (
	"encoding/json"
	"net/http"
)

func Index(w http.ResponseWriter, r *http.Request) {

	type Response struct {
		Success bool   `json:"success"`
		Message string `json:"message"`
	}

	response := &Response{
		true,
		"DAMN kid!",
	}

	json, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}
