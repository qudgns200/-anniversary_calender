package main

import (
	"log"
	"net/http"
	"os"

	userapi "github.com/qudgns200/Anniversary_calendar/server/userapi"

	"github.com/labstack/echo"
)

func main() {
	port := GetPort()
	log.Println("[-] Listening on...", port)

	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "HELLO WORLD")
	})

	e.GET("/user/:id", func(c echo.Context) error {
		id := c.Param("id")
		log.Println(id)

		u := userapi.GetUser(id)

		log.Println(u)

		return c.JSON(http.StatusOK, u)
	})

	e.Logger.Fatal(e.Start(port))
}

func GetUser() {

}

// GetPort is function which gets PORT
func GetPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Println("[-] No PORT environment variable detected. Setting to ", port)
	}
	return ":" + port
}
