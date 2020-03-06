package main

import "github.com/qudgns200/Anniversary_calendar/server/dbtest"

func main() {
	// port := GetPort()
	// log.Println("[-] Listening on...", port)

	// e := echo.New()
	// e.GET("/", func(c echo.Context) error {
	// 	return c.String(http.StatusOK, "Hello World!")
	// })

	// e.Logger.Fatal(e.Start(port))

	dbtest.Dbtest()

}

// // for push on heroku (Get a port)
// func GetPort() string {
// 	port := os.Getenv("PORT")
// 	if port == "" {
// 		port = "8080"
// 		log.Println("[-] No PORT environment variable detected. Setting to ", port)
// 	}
// 	return ":" + port
// }
