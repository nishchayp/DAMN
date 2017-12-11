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
	DB.db.AutoMigrate(&Access{})

	router := httprouter.New()

	router.ServeFiles("/static/*filepath", http.Dir("./public"))
	router.GET("/", Index)
	router.GET("/login", LoginHandler)
	router.GET("/options", Options)
	router.POST("/makeAccessRequest", MakeAccessRequest)
	router.GET("/makeAdminRequest", MakeAdminRequest)
	router.GET("/admin", AdminIndex)

	router.GET("/admin/acceptAdminRequest/:id", AcceptAdminRequest)
	router.GET("/admin/rejectAdminRequest/:id", RejectAdminRequest)
	router.GET("/admin/revokeAdminPrivilege/:id", RevokeAdminPrivilege)

	router.POST("/admin/acceptAccessRequest/:id", AcceptAccessRequest)
	router.GET("/admin/rejectAccessRequest/:id", RejectAccessRequest)
	router.GET("/admin/revokeAccessPrivilege/:id", RevokeAccessPrivilege)

	router.GET("/accesses", AccessesHandler)
	router.GET("/accessrequests", AccessRequestsHandler)
	router.GET("/admins", AdminsHandler)
	router.GET("/adminrequests", AdminRequestsHandler)

	log.Fatal(http.ListenAndServe(":8080", router))
}
