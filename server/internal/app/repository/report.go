package repository

import (
	"github.com/kmdavidds/database-final-project/server/internal/app/config"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/dto"
)

func Report() dto.Report {
	report := dto.Report{}

	type res struct {
		NumOrder int
		SumOrder float32
	}

	var o res

	config.DB.Raw(
		`SELECT SUM(total_amount) AS sum_order, COUNT(total_amount) AS num_order
		FROM orders`,
	).Scan(&o)

	type reservationRes struct {
		NumReservation int
		SumReservation float32
	}

	var r reservationRes

	config.DB.Raw(
		`SELECT SUM(amount_paid) AS sum_reservation, COUNT(amount_paid) AS num_reservation
		FROM reservations`,
	).Scan(&r)

	type sessionRes struct {
		NumSession int
		SumSession float32
	}

	var s sessionRes

	config.DB.Raw(
		`SELECT SUM(price) AS sum_session, COUNT(price) AS num_session
		FROM sessions`,
	).Scan(&s)

	report.NumOrder = o.NumOrder
	report.SumOrder = o.SumOrder
	report.NumReservation = r.NumReservation
	report.SumReservation = r.SumReservation
	report.NumSession = s.NumSession
	report.SumSession = s.SumSession
	report.TotalProfit = o.SumOrder + r.SumReservation + s.SumSession

	return report
}
