package handlers

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/database-final-project/server/internal/app/service"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
)

func StaffLogin(c *fiber.Ctx) error {
	req := dto.LoginRequest{}
	err := c.BodyParser(&req)
	if err != nil {
		return c.Status(http.StatusUnprocessableEntity).JSON(map[string]any{
			"error": err,
		})
	}

	cookie, err := service.StaffLogin(req)
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}
	
	c.Cookie(cookie)

	return c.SendStatus(http.StatusOK)
}

func StaffRegister(c *fiber.Ctx) error {
	req := dto.StaffRegisterRequest{}
	err := c.BodyParser(&req)
	if err != nil {
		return c.Status(http.StatusUnprocessableEntity).JSON(map[string]any{
			"error": err,
		})
	}

	err = service.StaffRegister(req)
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}

	return c.SendStatus(http.StatusCreated)
}

func GetAllStaffs(c *fiber.Ctx) error {
	staffs, err := service.GetAllStaffs()
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}

	return c.Status(http.StatusOK).JSON(map[string]any{
		"staffs": staffs,
	})
}


