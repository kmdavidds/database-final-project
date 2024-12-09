package dto

type Report struct {
	NumOrder       int     `json:"numOrder"`
	SumOrder       float32 `json:"sumOrder"`
	NumReservation int     `json:"numReservation"`
	SumReservation float32 `json:"sumReservation"`
	NumSession     int     `json:"numSession"`
	SumSession     float32 `json:"sumSession"`
	TotalProfit    float32 `json:"totalProfit"`
}
