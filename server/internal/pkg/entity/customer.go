package entity

import "time"

type Customer struct {
	CustomerID   int       `json:"customerID" gorm:"primaryKey;autoIncrement"`
	Email        string    `json:"email" gorm:"index"`
	Password     string    `json:"-"`
	Name         string    `json:"name"`
	Phone        string    `json:"phone"`
	MembershipID string    `json:"membershipID"`
	RegisteredAt time.Time `json:"registeredAt"`
}
