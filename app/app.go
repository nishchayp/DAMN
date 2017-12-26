package app

import (
	"log"
	"net/http"

	_ "github.com/jinzhu/gorm/dialects/mysql" // Driver for MySQL
	"github.com/julienschmidt/httprouter"
)


var err error
// DB : Database struct
var DB Database

// Run : migrates and creates tables in data base
// registers functions with routes
// opens up port and serves the app
func Run() {

	defer DB.db.Close()

	DB.db.AutoMigrate(&AccessRequest{} , &Access{} , &AdminRequest{} , &Admin{})

	router := httprouter.New()

	router.GET("/", Index)
	router.GET("/login", Index)
	router.GET("/auth", AuthHandler)
	router.GET("/logout", LogoutHandler)
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

	router.GET("/admin/getAccesses", AccessesHandler)
	router.GET("/admin/getAccessRequests", AccessRequestsHandler)
	router.GET("/admin/getAdmins", AdminsHandler)
	router.GET("/admin/getAdminRequests", AdminRequestsHandler)

	router.GET("/accesses", AdminIndex)
	router.GET("/accessrequests", AdminIndex)
	router.GET("/admins", AdminIndex)
	router.GET("/adminrequests", AdminIndex)

	router.NotFound = http.FileServer(http.Dir("./dist"))

	log.Println("Server listening at port 8080")
	log.Fatal(http.ListenAndServe(":8080", router))

}
