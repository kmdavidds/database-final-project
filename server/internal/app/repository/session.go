package repository

import (
	"github.com/kmdavidds/database-final-project/server/internal/app/config"
	"github.com/kmdavidds/database-final-project/server/internal/pkg/entity"
)

func GetAllSessions() ([]entity.Session, error) {
	var sessions []entity.Session

	err := config.DB.Raw(
		`SELECT *
		FROM sessions
		ORDER BY session_id ASC`,
	).Scan(&sessions).Error

	return sessions, err
}
