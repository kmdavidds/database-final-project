package repository

import (
	"github.com/kmdavidds/database-final-project/server/internal/app/config"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
)

func CreateItem(i entity.Item) error {
	err := config.DB.Exec(
		`INSERT INTO items
		("item_name", "category", "price", "stock_level")
		VALUES
		(?, ?, ?, ?);`,
		i.ItemName, i.Category, i.Price, i.StockLevel,
	).Error

	return err
}

func GetItem(id int) (entity.Item, error) {
	var item entity.Item

	err := config.DB.Raw(
		`SELECT *
		FROM items
		WHERE item_id = ?`,
		id,
	).Scan(&item).Error

	return item, err
}

func GetAllItems() ([]entity.Item, error) {
	var items []entity.Item

	err := config.DB.Raw(
		`SELECT *
		FROM items
		ORDER BY item_id ASC`,
	).Scan(&items).Error

	return items, err
}