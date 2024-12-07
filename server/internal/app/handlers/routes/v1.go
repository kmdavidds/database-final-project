package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/database-final-project/server/internal/app/handlers"
)

func Mount(api fiber.Router) {
	v1 := api.Group("/v1")

	customerRoutes(v1)
	adminRoutes(v1)
	staffRoutes(v1)
}

func customerRoutes(v1 fiber.Router) {
	customer := v1.Group("/customers")
	
	customer.Get("", handlers.GetAllCustomers)
	customer.Post("/register", handlers.CustomerRegister)
	customer.Post("/login", handlers.CustomerLogin)
}

func adminRoutes(v1 fiber.Router) {
	admin := v1.Group("/admins")

	admin.Post("/login", handlers.AdminLogin)
}

func staffRoutes(v1 fiber.Router) {
	staff := v1.Group("/staffs")

	staff.Get("", handlers.GetAllStaffs)
	staff.Post("/register", handlers.StaffRegister)
	staff.Post("/login", handlers.StaffLogin)
}