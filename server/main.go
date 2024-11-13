package main

import (
	"log"

	"github.com/joho/godotenv"
	"github.com/kmdavidds/database-final-project/server/internal/app/config"
	"github.com/kmdavidds/database-final-project/server/internal/app/handlers/routes"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("failed to load .env %v", err)
	}

	app := config.NewFiber()

	api := app.Group("/api")

	routes.Mount(api)

	err = config.NewDatabase()
	if err != nil {
		log.Fatalf("failed to connect to database %v", err)
	}

	err = config.MigrateTables()
	if err != nil {
		log.Fatalf("failed to connect to migrate tables %v", err)
	}

	err = app.Listen(":1945")
	if err != nil {
		log.Fatalf("failed to listen %v", err)
	}
}
