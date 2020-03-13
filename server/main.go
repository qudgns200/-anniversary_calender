package main

import (
	"log"
	"net/http"
	"os"

	"github.com/labstack/echo"
	_ "github.com/labstack/echo"
)

func main() {
	port := GetPort()
	log.Println("[-] Listening on...", port)

	e := echo.New()

	e.GET("/user/:id", func(c echo.Context) error {
		id := c.Param("id")
		u := GetUser(id)
		return c.JSON(http.StatusOK, u)
	})

	e.Logger.Fatal(e.Start(port))
}

// for push on heroku (Get a port)
func GetPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Println("[-] No PORT environment variable detected. Setting to ", port)
	}
	return ":" + port
}
