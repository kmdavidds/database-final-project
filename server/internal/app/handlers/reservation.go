package handlers

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/database-final-project/server/internal/app/service"
)

func GetAllReservations(c *fiber.Ctx) error {
	reservations, err := service.GetAllReservations()
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}

	return c.Status(http.StatusOK).JSON(map[string]any{
		"reservations": reservations,
	})
}
