package service

import (
	"errors"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
)

func AdminLogin(req dto.LoginRequest) (*fiber.Cookie, error) {
	if req.Email != os.Getenv("ADMIN_EMAIL") || req.Password != os.Getenv("ADMIN_PASSWORD") {
		return nil, errors.New("invalid credentials")
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
		Name:     "Admin",
		Value:    tokenString,
		Expires:  time.Now().Add(24 * time.Hour),
		HTTPOnly: true,
		SameSite: "Lax",
	}, nil
}
