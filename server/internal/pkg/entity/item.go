package entity

type Item struct {
	ItemID     int     `json:"itemID" gorm:"primaryKey;autoIncrement"`
	ItemName   string  `json:"itemName"`
	Category   string  `json:"category"`
	Price      float32 `json:"price"`
	StockLevel int     `json:"stockLevel"`
}
