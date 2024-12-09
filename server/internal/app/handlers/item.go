package handlers

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/database-final-project/server/internal/app/service"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
)

func ItemRegister(c *fiber.Ctx) error {
	req := dto.ItemRegisterRequest{}
	err := c.BodyParser(&req)
	if err != nil {
		return c.Status(http.StatusUnprocessableEntity).JSON(map[string]any{
			"error": err.Error(),
		})
	}

	err = service.ItemRegister(req)
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}

	return c.SendStatus(http.StatusCreated)
}

func GetAllItems(c *fiber.Ctx) error {
	items, err := service.GetAllItems()
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}

	return c.Status(http.StatusOK).JSON(map[string]any{
		"items": items,
	})
}