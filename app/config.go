package app

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite" // Driver for SQLite

	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

/*
** contains init function to cofigure OAuth2 and Mysql
 */

var confOAuth2 *oauth2.Config

func init() {

	// doesen't needs to be called explicitly
	// configures OAuth2 and Mysql

	var credOAuth2 CredentialOAuth2
	var credMysql CredentialMysql

	fileOAuth2, err := ioutil.ReadFile("./credOAuth2.json")
	if err != nil {
		log.Fatalf("Error while reading oauth2 config file.\nError: %v\n", err.Error())
	}
	json.Unmarshal(fileOAuth2, &credOAuth2)

	confOAuth2 = &oauth2.Config{

		// presently set through account nishchayparashar98@gmail.com
		ClientID:     credOAuth2.Cid,
		ClientSecret: credOAuth2.Csecret,

		// change redirect on production server
		RedirectURL: "http://127.0.0.1:8080/options",

		Scopes: []string{
			"https://www.googleapis.com/auth/userinfo.email",
		},
		Endpoint: google.Endpoint,
	}

	fileMysql, err := ioutil.ReadFile("./credMysql.json")
	if err != nil {
		log.Fatalf("Error while reading oauth2 config file.\nError: %v\n", err.Error())
	}
	json.Unmarshal(fileMysql, &credMysql)

	connectionString := fmt.Sprintf("%s:%s@/%s?charset=utf8&parseTime=True&loc=Local",
		credMysql.DBUsername,
		credMysql.DBPassword,
		credMysql.DBName)

	DB.db, err = gorm.Open("mysql", connectionString)
	if err != nil {
		log.Fatal("Could not open database : ", err.Error())
	}

	state = randState()

}
