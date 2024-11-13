package repository

import (
	"time"

	"github.com/kmdavidds/database-final-project/server/internal/app/config"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
)

func CreateCustomer(c entity.Customer) error {
	err := config.DB.Exec(
		`INSERT INTO customers
		("email", "password", "name", "phone", "membership_id", "registered_at")
		VALUES
		(?, ?, ?, ?, ?, ?);`,
		c.Email, c.Password, c.Name, c.Phone, "basic", time.Now(),
	).Error

	return err
}

func GetCustomer(email string) (entity.Customer, error) {
	var customer entity.Customer

	err := config.DB.Raw(
		`SELECT email, password
		FROM customers
		WHERE email = ?;`,
		email,
	).Scan(&customer).Error

	return customer, err
}

