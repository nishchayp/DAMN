package app

import (
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/julienschmidt/httprouter"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

var confOAuth2 *oauth2.Config

var state string

func init() {

	var credOAuth2 CredentialOAuth2
	var credMysql CredentialMysql

	fileOAuth2, err := ioutil.ReadFile("./credOAuth2.json")
	if err != nil {
		log.Printf("File error: %v\n", err)
		os.Exit(1)
	}
	json.Unmarshal(fileOAuth2, &credOAuth2)

	confOAuth2 = &oauth2.Config{
		ClientID:     credOAuth2.Cid,
		ClientSecret: credOAuth2.Csecret,
		RedirectURL:  "http://127.0.0.1:8080/options",
		Scopes: []string{
			"https://www.googleapis.com/auth/userinfo.email",
		},
		Endpoint: google.Endpoint,
	}

	fileMysql, err := ioutil.ReadFile("./credMysql.json")
	if err != nil {
		log.Printf("File error: %v\n", err)
		os.Exit(1)
	}
	json.Unmarshal(fileMysql, &credMysql)

	connectionString := fmt.Sprintf("%s:%s@/%s?charset=utf8&parseTime=True&loc=Local",
		credMysql.DBUsername,
		credMysql.DBPassword,
		credMysql.DBName)

	DB.db, err = gorm.Open("mysql", connectionString)
	if err != nil {
		log.Fatal("Could not open database : ", err)
	}

	state = randState()

}

func randState() string {
	b := make([]byte, 32)
	rand.Read(b)
	return base64.StdEncoding.EncodeToString(b)
}

func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	// sh.Command("./scripts/test.sh", "1.1.1.1", "ssh key").Run()

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

func LoginHandler(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	http.Redirect(w, r, confOAuth2.AuthCodeURL(state), 302)
}

func Options(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	if r.FormValue("state") != state {
		http.Error(w, "possibly malacious/fake callback redirect", http.StatusBadRequest)
		return
	}

	tok, err := confOAuth2.Exchange(oauth2.NoContext, r.FormValue("code"))
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	check, err := http.Get("https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=" + tok.AccessToken)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	defer check.Body.Close()

	client := confOAuth2.Client(oauth2.NoContext, tok)
	info, err := client.Get("https://www.googleapis.com/oauth2/v3/userinfo")
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	defer info.Body.Close()
	data, _ := ioutil.ReadAll(info.Body)

	var googTok GoogleToken

	json.Unmarshal(data, &googTok)

	SetCookieHandler(&googTok, w)

	log.Println("Email body: ", string(data))
	fmt.Fprintf(w, "%s", string(data))
}

func MakeAccessRequest(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	type Receive struct {
		SshKey  string `json:"ssh_key"`
		Message string `json:"message"`
	}

	var response Response

	decoder := json.NewDecoder(r.Body)
	var receive Receive
	err := decoder.Decode(&receive)
	if err != nil {
		panic(err)
	}

	googTok := ReadCookieHandler(w, r)

	if googTok.Email == "" {
		response = Response{
			false,
			"User not authenticated",
		}
	} else {

		var accessRequest AccessRequest

		notFoundErr := DB.db.Debug().Where("email = ?", googTok.Email).First(&accessRequest).Error
		if notFoundErr != nil {
			accessRequest = AccessRequest{
				Name:    googTok.Name,
				Email:   googTok.Email,
				Message: receive.Message,
				SshKey:  receive.SshKey,
			}

			DB.db.Create(&accessRequest)

			response = Response{
				true,
				"New request sent",
			}
		} else {
			response = Response{
				false,
				"Request already exists",
			}
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

func MakeAdminRequest(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	var response Response

	googTok := ReadCookieHandler(w, r)

	if googTok.Email == "" {
		response = Response{
			false,
			"User not authenticated",
		}
	} else {

		var adminRequest AdminRequest

		notFoundErr := DB.db.Debug().Where("email = ?", googTok.Email).First(&adminRequest).Error
		if notFoundErr != nil {
			adminRequest = AdminRequest{
				Name:  googTok.Name,
				Email: googTok.Email,
			}

			DB.db.Create(&adminRequest)

			response = Response{
				true,
				"New request sent",
			}
		} else {
			response = Response{
				false,
				"Request already exists",
			}
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
