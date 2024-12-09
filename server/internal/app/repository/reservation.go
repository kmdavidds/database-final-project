package repository

import (
	"github.com/kmdavidds/database-final-project/server/internal/app/config"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
)

func GetAllReservations() ([]entity.Reservation, error) {
	var reservations []entity.Reservation

	err := config.DB.Raw(
		`SELECT *
		FROM reservations
		ORDER BY reservation_id ASC`,
	).Scan(&reservations).Error

	return reservations, err
}
