package service

import (
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/kmdavidds/database-final-project/server/internal/app/repository"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
	"golang.org/x/crypto/bcrypt"
)

func CustomerRegister(req dto.CustomerRegisterRequest) error {
	passwordByte, err := bcrypt.GenerateFromPassword([]byte(req.Password), 10)
	if err != nil {
		return err
	}

	customer := entity.Customer{
		Email:    req.Email,
		Password: string(passwordByte),
		Name:     req.Name,
		Phone:    req.Phone,
	}

	err = repository.CreateCustomer(customer)
	if err != nil {
		return err
	}

	return nil
}

func CustomerLogin(req dto.LoginRequest) (*fiber.Cookie, error) {
	customer, err := repository.GetCustomer(req.Email)
	if err != nil {
		return nil, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(customer.Password), []byte(req.Password))
	if err != nil {
		return nil, err
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": req.Email,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))

	if err != nil {
		return nil, err
	}

	return &fiber.Cookie{
		Name:     "Authorization",
		Value:    tokenString,
		Expires:  time.Now().Add(24 * time.Hour),
		HTTPOnly: true,
		SameSite: "Lax",
		Domain:   "localhost",
	}, nil
}
