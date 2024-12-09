package dto

type OrderRequest struct {
	CustomerEmail string
	ItemID        int `json:"itemID"`
	Quantity      int `json:"quantity"`
}
