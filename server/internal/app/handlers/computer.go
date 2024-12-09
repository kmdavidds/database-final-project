package handlers

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/database-final-project/server/internal/app/service"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
)

func ComputerRegister(c *fiber.Ctx) error {
	req := dto.ComputerRegisterRequest{}
	err := c.BodyParser(&req)
	if err != nil {
		return c.Status(http.StatusUnprocessableEntity).JSON(map[string]any{
			"error": err.Error(),
		})
	}

	err = service.ComputerRegister(req)
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}

	return c.SendStatus(http.StatusCreated)
}

func GetAllComputers(c *fiber.Ctx) error {
	computers, err := service.GetAllComputers()
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}

	return c.Status(http.StatusOK).JSON(map[string]any{
		"computers": computers,
	})
}