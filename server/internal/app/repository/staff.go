package repository

import (
	"github.com/kmdavidds/database-final-project/server/internal/app/config"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
)

func CreateStaff(s entity.Staff) error {
	err := config.DB.Exec(
		`INSERT INTO staffs
		("email", "password", "name", "phone")
		VALUES
		(?, ?, ?, ?);`,
		s.Email, s.Password, s.Name, s.Phone,
	).Error

	return err
}

func GetStaff(email string) (entity.Staff, error) {
	var staff entity.Staff

	err := config.DB.Raw(
		`SELECT email, password
		FROM staffs
		WHERE email = ?;`,
		email,
	).Scan(&staff).Error

	return staff, err
}

func GetAllStaffs() ([]entity.Staff, error) {
	var staffs []entity.Staff

	err := config.DB.Raw(
		`SELECT *
		FROM staffs`,
	).Scan(&staffs).Error

	return staffs, err
}
