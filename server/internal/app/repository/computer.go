package repository

import (
	"github.com/kmdavidds/database-final-project/server/internal/app/config"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
)

func CreateComputer(c entity.Computer) error {
	err := config.DB.Exec(
		`INSERT INTO computers
		("computer_name", "status")
		VALUES
		(?, ?);`,
		c.ComputerName, "Available",
	).Error

	return err
}

func GetAllComputers() ([]entity.Computer, error) {
	var computers []entity.Computer

	err := config.DB.Raw(
		`SELECT *
		FROM computers
		ORDER BY computer_id ASC`,
	).Scan(&computers).Error

	return computers, err
}