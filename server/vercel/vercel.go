package vercel

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/database-final-project/server/internal/app/config"
	"github.com/kmdavidds/database-final-project/server/internal/app/handlers/routes"
)

func NewApp() *fiber.App {
	app := config.NewFiber()

	api := app.Group("api")

	routes.Mount(api)

	err := config.NewDatabase()
	if err != nil {
		log.Fatalf("failed to connect to database %v", err)
	}

	return app
}
