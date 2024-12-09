package service

import (
	"github.com/kmdavidds/database-final-project/server/internal/app/repository"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
)

func ItemRegister(req dto.ItemRegisterRequest) error {
	item := entity.Item{
		ItemName: req.ItemName,
		Category: req.Category,
		Price: req.Price,
		StockLevel: req.StockLevel,
	}

	return repository.CreateItem(item)
}

func GetAllItems() ([]entity.Item, error) {
	return repository.GetAllItems()
}