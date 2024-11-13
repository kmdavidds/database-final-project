package entity

import "time"

type Customer struct {
	ID           int       `json:"id" gorm:"primaryKey;autoIncrement"`
	Email        string    `json:"email" gorm:"index"`
	Password     string    `json:"-"`
	Name         string    `json:"name"`
	Phone        string    `json:"phone"`
	MembershipID string    `json:"membershipID"`
	RegisteredAt time.Time `json:"registeredAt"`
}
