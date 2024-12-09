package service

import (
	"errors"

	"github.com/kmdavidds/database-final-project/server/internal/app/repository"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
)

func Order(req dto.OrderRequest) error {
	item, err := repository.GetItem(req.ItemID)
	if err != nil {
		return err
	}

	if req.Quantity > item.StockLevel {
		return errors.New("not enough items")
	}

	totalAmount := item.Price * float32(req.Quantity)

	order := entity.Order{
		CustomerEmail: req.CustomerEmail,
		ItemID: req.ItemID,
		Quantity: req.Quantity,
		TotalAmount: totalAmount,
	}

	return repository.CreateOrder(order)
}

func GetAllOrders() ([]entity.Order, error) {
	return repository.GetAllOrders()
}