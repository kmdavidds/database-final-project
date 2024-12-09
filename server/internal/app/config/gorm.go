package config

import (
	"os"

	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func NewDatabase() error {
	db, err := gorm.Open(postgres.Open(os.Getenv("POSTGRES_URL")), &gorm.Config{
		PrepareStmt: true,
	})
	DB = db
	return err
}

func MigrateTables() error {
	err := DB.AutoMigrate(
		&entity.Customer{},
		&entity.Staff{},
		&entity.Item{},
		&entity.Computer{},
		&entity.Order{},
		&entity.Reservation{},
		&entity.Session{},
	)
	return err
}