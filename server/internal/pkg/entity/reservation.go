package entity

import "time"

type Reservation struct {
	ReservationID int       `json:"reservationID" gorm:"primaryKey;autoIncrement"`
	CustomerEmail string    `json:"customerEmail"`
	ComputerID    int       `json:"computerID"`
	StartTime     time.Time `json:"startTime"`
	EndTime       time.Time `json:"endTime"`
	AmountPaid    float32   `json:"totalAmount"`
}
