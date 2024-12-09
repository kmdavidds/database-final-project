package dto

type ItemRegisterRequest struct {
	ItemName   string  `json:"itemName"`
	Category   string  `json:"category"`
	Price      float32 `json:"price"`
	StockLevel int     `json:"stockLevel"`
}