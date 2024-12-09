package handlers

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/database-final-project/server/internal/app/service"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
)

func Order(c *fiber.Ctx) error {
	req := dto.OrderRequest{}
	err := c.BodyParser(&req)
	if err != nil {
		return c.Status(http.StatusUnprocessableEntity).JSON(map[string]any{
			"error": err.Error(),
		})
	}

	customerEmail, ok := c.Locals("email").(string)
	if !ok {
		return c.Status(http.StatusUnauthorized).JSON(map[string]any{
			"error": "missing email",
		})
	}

	req.CustomerEmail = customerEmail

	err = service.Order(req)
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}

	return c.SendStatus(http.StatusCreated)
}

func GetAllOrders(c *fiber.Ctx) error {
	orders, err := service.GetAllOrders()
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}

	return c.Status(http.StatusOK).JSON(map[string]any{
		"orders": orders,
	})
}