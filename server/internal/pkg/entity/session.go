package entity

import "time"

type Session struct {
	SessionID     int       `json:"sessionID" gorm:"primaryKey;autoIncrement"`
	CustomerEmail string    `json:"customerEmail"`
	ComputerID    int       `json:"computerID"`
	StartTime     time.Time `json:"startTime"`
	Duration      int       `json:"duration"`
	Price         float32   `json:"price"`
}
