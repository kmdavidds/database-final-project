package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/database-final-project/server/internal/app/handlers"
)

func Mount(api fiber.Router) {
	v1 := api.Group("/v1")

	customerRoutes(v1)
}

func customerRoutes(v1 fiber.Router) {
	customer := v1.Group("/customer")
	
	customer.Post("/register", handlers.CustomerRegister)
	customer.Post("/login", handlers.CustomerLogin)
}