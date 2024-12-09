package middlewares

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func RequireAuth(role string) fiber.Handler {
	return func(c *fiber.Ctx) error {
		tokenString := c.Cookies(role)
		if tokenString == "" {
			return c.SendStatus(http.StatusUnauthorized)
		}

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
			}
			return []byte(os.Getenv("JWT_SECRET")), nil
		})
		if err != nil {
			return c.SendStatus(http.StatusUnauthorized)
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			return c.SendStatus(http.StatusUnauthorized)
		}
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			return c.SendStatus(http.StatusUnauthorized)
		}

		c.Locals("email", claims["sub"].(string))
		return c.Next()
	}
}
