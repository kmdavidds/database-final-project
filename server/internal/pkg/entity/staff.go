package entity

type Staff struct {
	StaffID      int    `json:"staffID" gorm:"primaryKey;autoIncrement"`
	Name         string `json:"name"`
	Email        string `json:"email" gorm:"index"`
	Password     string `json:"-"`
	Phone        string `json:"phone"`
}
