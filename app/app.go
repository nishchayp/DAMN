package app

import (
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
)

var err error
var DB Database

func Run() {

	defer DB.db.Close()

	DB.db.AutoMigrate(&AccessRequest{})
	DB.db.AutoMigrate(&AdminRequest{})
	DB.db.AutoMigrate(&Admin{})

	router := httprouter.New()

	router.GET("/", Index)
	router.GET("/login", LoginHandler)
	router.GET("/options", Options)
	router.POST("/makeAccessRequest", MakeAccessRequest)
	router.GET("/makeAdminRequest", MakeAdminRequest)
	router.GET("/loginAdmin", LoginAdmin)

	log.Fatal(http.ListenAndServe(":8080", router))
}
