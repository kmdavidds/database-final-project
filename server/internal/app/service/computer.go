package service

import (
	"github.com/kmdavidds/database-final-project/server/internal/app/repository"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
)

func ComputerRegister(req dto.ComputerRegisterRequest) error {
	computer := entity.Computer{
		ComputerName: req.ComputerName,
	}

	return repository.CreateComputer(computer)
}

func GetAllComputers() ([]entity.Computer, error) {
	return repository.GetAllComputers()
}