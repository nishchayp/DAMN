package app

import (
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"net/http"
)

var err error
var DB Database

func Run() {

	// var err error

	// db, err = gorm.Open("sqlite3", "test.db")

	// if err != nil {
	// panic("Database not created , error ")
	// }

	defer DB.db.Close()

	DB.db.AutoMigrate(&AccessRequest{})
	DB.db.AutoMigrate(&AdminRequest{})
	DB.db.AutoMigrate(&Admin{})

	http.HandleFunc("/", Index)
	http.HandleFunc("/login", LoginHandler)
	http.HandleFunc("/options", Options)
	http.HandleFunc("/makeAccessRequest", MakeAccessRequest)
	http.HandleFunc("/makeAdminRequest", MakeAdminRequest)
	http.HandleFunc("/loginAdmin", LoginAdmin)

	http.ListenAndServe(":8080", nil)
}
