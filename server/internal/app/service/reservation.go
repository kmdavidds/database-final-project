package service

import (
	"github.com/kmdavidds/database-final-project/server/internal/app/repository"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
)

func GetAllReservations() ([]entity.Reservation, error) {
	return repository.GetAllReservations()
}
