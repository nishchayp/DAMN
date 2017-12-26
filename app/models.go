package app

/*
** contains all models of the data base
 */

// AccessRequest : model for storing all the requests that are made for acces to a server
type AccessRequest struct {
	AccessRequestID uint   `json:"access_request_id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Name            string `json:"name" sql:"not null"`
	Email           string `json:"email" sql:"not null;unique"`
	Message         string `json:"message" sql:"not null"`
	SSHKey          string `json:"ssh_key" sql:"size:2048;not null"`
}

// Access : model for storing the details of users that have acces to a server
type Access struct {
	AccessID uint   `json:"access_id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Name     string `json:"name" sql:"not null"`
	Email    string `json:"email" sql:"not null"`
	IP       string `json:"ip" sql:"not null"`
	SSHKey   string `json:"ssh_key" sql:"size:2048;not null"`
}

// AdminRequest : model for storing all the requests that are made for admin access
type AdminRequest struct {
	AdminRequestID uint   `json:"admin_request_id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Name           string `json:"name" sql:"not null"`
	Email          string `json:"email" sql:"not null;unique"`
}

// Admin : model to store the details of each admin
type Admin struct {
	AdminID uint   `json:"admin_id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Name    string `json:"name" sql:"not null"`
	Email   string `json:"email" sql:"not null;unique"`
}
