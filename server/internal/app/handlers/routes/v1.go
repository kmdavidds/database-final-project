package routes

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/database-final-project/server/internal/app/handlers"
	"github.com/kmdavidds/database-final-project/server/internal/app/handlers/middlewares"
	"github.com/kmdavidds/database-final-project/server/internal/app/repository"
)

func Mount(api fiber.Router) {
	v1 := api.Group("/v1")

	customerRoutes(v1)
	adminRoutes(v1)
	staffRoutes(v1)
	itemRoutes(v1)
	computerRoutes(v1)
	orderRoutes(v1)
	reservationRoutes(v1)
	sessionRoutes(v1)

	v1.Get("report", func(c *fiber.Ctx) error {
		report := repository.Report()

		return c.Status(http.StatusOK).JSON(map[string]any{
			"report": report,
		})
	})
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

func itemRoutes(v1 fiber.Router) {
	item := v1.Group("/items")

	item.Get("", handlers.GetAllItems)
	item.Post("/register", handlers.ItemRegister)
}

func computerRoutes(v1 fiber.Router) {
	computer := v1.Group("/computers")

	computer.Get("", handlers.GetAllComputers)
	computer.Post("/register", handlers.ComputerRegister)
}

func orderRoutes(v1 fiber.Router) {
	order := v1.Group("/orders")

	order.Get("", handlers.GetAllOrders)
	order.Post("", middlewares.RequireAuth("Customer"), handlers.Order)
}
func reservationRoutes(v1 fiber.Router) {
	reservation := v1.Group("/reservations")

	reservation.Get("", handlers.GetAllReservations)
}
func sessionRoutes(v1 fiber.Router) {
	session := v1.Group("/sessions")

	session.Get("", handlers.GetAllSessions)
}
