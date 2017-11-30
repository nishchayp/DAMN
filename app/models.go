package app

type AccessRequest struct {
	AccessRequestID uint   `gorm:"AUTO_INCREMENT"`
	Name            string `gorm:"not null"`
	Email           string `gorm:"not null"`
	Message         string `gorm:"not null"`
}

type AdminRequest struct {
	AdminRequestID uint   `gorm:"AUTO_INCREMENT"`
	Name           string `gorm:"not null"`
	Email          string `gorm:"not null"`
}

type Admin struct {
	AdminID uint   `gorm:"AUTO_INCREMENT"`
	Name    string `gorm:"not null"`
	Email   string `gorm:"not null"`
}
