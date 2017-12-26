package app

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql" // Driver for MySQL
)

/*
** contains all structs used in the app
 */

// Database : Contains the form database object
type Database struct {
	db *gorm.DB
}

// CredentialOAuth2 : Stores the id and secret key for OAuth
type CredentialOAuth2 struct {
	Cid     string `json:"cid"`
	Csecret string `json:"csecret"`
}

// CredentialMysql : Stores the credentials for MySQL Database
type CredentialMysql struct {
	DBUsername string `json:"db_username"`
	DBPassword string `json:"db_password"`
	DBName     string `json:"db_name"`
}

// Response : Response struct for each incoming request
type Response struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

// GoogleToken : Struct to store the information recieved from OAuth2 callback
type GoogleToken struct {
	Sub           string `json:"sub"`
	Name          string `json:"name"`
	GivenName     string `json:"given_name"`
	FamilyName    string `json:"family_name"`
	Profile       string `json:"profile"`
	Picture       string `json:"picture"`
	Email         string `json:"email"`
	EmailVerified bool   `json:"email_verified"`
	Gender        string `json:"gender"`
}
