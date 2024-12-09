package entity

type Computer struct {
	ComputerID   int    `json:"computerID" gorm:"primaryKey;autoIncrement"`
	ComputerName string `json:"computerName"`
	Status       string `json:"status"`
}
