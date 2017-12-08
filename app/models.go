package app

type AccessRequest struct {
	AccessRequestID uint   `json:"access_request_id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Name            string `json:"name" sql:"not null"`
	Email           string `json:"email" sql:"not null;unique"`
	Message         string `json:"message" sql:"not null"`
	SshKey          string `json:"ssh_key" sql:"size:2048;not null"`
}

type Access struct {
	AccessID uint   `json:"access_id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Name     string `json:"name" sql:"not null"`
	Email    string `json:"email" sql:"not null"`
	IP       string `json:"ip" sql:"not null"`
	SshKey   string `json:"ssh_key" sql:"size:2048;not null"`
}

type AdminRequest struct {
	AdminRequestID uint   `json:"admin_request_id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Name           string `json:"name" sql:"not null"`
	Email          string `json:"email" sql:"not null;unique"`
}

type Admin struct {
	AdminID uint   `json:"admin_id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Name    string `json:"name" sql:"not null"`
	Email   string `json:"email" sql:"not null;unique"`
}
