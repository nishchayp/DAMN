package app

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Database struct {
	db *gorm.DB
}

type CredentialOAuth2 struct {
	Cid     string `json:"cid"`
	Csecret string `json:"csecret"`
}

type CredentialMysql struct {
	DBUsername string `json:"db_username"`
	DBPassword string `json:"db_password"`
	DBName     string `json:"db_name"`
}

type Response struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

// type GoogleToken struct {
// 	Azp           string `json:"azp"`
// 	Aud           string `json:"aud"`
// 	Sub           string `json:"sub"`
// 	Scope         string `json:"scope"`
// 	Exp           string `json:"exp"`
// 	ExpiresIn     string `json:"expires_in"`
// 	Email         string `json:"email"`
// 	EmailVerified string `json:"email_verified"`
// 	AccessType    string `json:"access_type"`
// }

type GoogleToken struct {
	Sub           string `json:"sub"`
	Name          string `json:"name"`
	GivenName     string `json:"given_name"`
	FamilyName    string `json:"family_name"`
	Profile       string `json:"profile"`
	Picture       string `json:"picture"`
	Email         string `json:"email"`
	EmailVerified string `json:"email_verified"`
	Gender        string `json:"gender"`
}
