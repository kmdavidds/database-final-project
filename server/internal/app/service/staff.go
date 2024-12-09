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

func StaffRegister(req dto.StaffRegisterRequest) error {
	passwordByte, err := bcrypt.GenerateFromPassword([]byte(req.Password), 10)
	if err != nil {
		return err
	}

	staff := entity.Staff{
		Email:    req.Email,
		Password: string(passwordByte),
		Name:     req.Name,
		Phone:    req.Phone,
	}

	err = repository.CreateStaff(staff)
	if err != nil {
		return err
	}

	return nil
}

func StaffLogin(req dto.LoginRequest) (*fiber.Cookie, error) {
	staff, err := repository.GetStaff(req.Email)
	if err != nil {
		return nil, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(staff.Password), []byte(req.Password))
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

	domain := "siwi.komangdavid.me"
	if os.Getenv("STAGE") == "DEV" {
		domain = "localhost"
	}

	return &fiber.Cookie{
		Name:     "Staff",
		Value:    tokenString,
		Expires:  time.Now().Add(24 * time.Hour),
		HTTPOnly: true,
		SameSite: "Lax",
		Domain:   domain,
	}, nil
}

func GetAllStaffs() ([]entity.Staff, error) {
	return repository.GetAllStaffs()
}
