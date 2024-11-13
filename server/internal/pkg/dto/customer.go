package dto

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type CustomerRegisterRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Name     string `json:"name"`
	Phone    string `json:"phone"`
}
