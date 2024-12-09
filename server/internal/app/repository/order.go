package repository

import (
	"time"

	"github.com/kmdavidds/database-final-project/server/internal/app/config"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
	"gorm.io/gorm"
)

func CreateOrder(o entity.Order) error {
	tx := config.DB.Exec(
		`INSERT INTO orders
		("customer_email", "item_id", "quantity", "order_time", "total_amount")
		VALUES
		(?, ?, ?, ?, ?)	;`,
		o.CustomerEmail, o.ItemID, o.Quantity, time.Now(), o.TotalAmount,
	)

	tx = tx.Exec(
		`UPDATE items
		SET stock_level = ?
		WHERE item_id = ?;
		`,
		gorm.Expr("stock_level - ?", o.Quantity), o.ItemID,
	)
	if tx.Error != nil {
		tx.Rollback()
		return tx.Error
	}

	return nil
}

func GetAllOrders() ([]entity.Order, error) {
	var orders []entity.Order

	err := config.DB.Raw(
		`SELECT *
		FROM orders
		ORDER BY order_id ASC`,
	).Scan(&orders).Error

	return orders, err
}
