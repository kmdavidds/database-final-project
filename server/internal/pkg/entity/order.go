package entity

import "time"

type Order struct {
	OrderID       int       `json:"orderID" gorm:"primaryKey;autoIncrement"`
	CustomerEmail string    `json:"customerEmail"`
	ItemID        int       `json:"itemID"`
	Quantity      int       `json:"quantity"`
	OrderTime     time.Time `json:"orderTime"`
	TotalAmount   float32   `json:"totalAmount"`
}
