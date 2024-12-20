package handlers

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/database-final-project/server/internal/app/service"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
)

func AdminLogin(c *fiber.Ctx) error {
	req := dto.LoginRequest{}
	err := c.BodyParser(&req)
	if err != nil {
		return c.Status(http.StatusUnprocessableEntity).JSON(map[string]any{
			"error": err,
		})
	}

	cookie, err := service.AdminLogin(req)
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(map[string]any{
			"error": err,
		})
	}
	
	c.Cookie(cookie)

	return c.SendStatus(http.StatusOK)
}


