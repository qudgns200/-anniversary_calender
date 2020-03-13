package userapi

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql" // for mysql
)

var conn, _ = sql.Open("mysql",
	"bec93c2dc41609:38086ad3@tcp(us-cdbr-iron-east-04.cleardb.net:3306)/heroku_1fccce0c3c7b53d")

// User struct
type user struct {
	ID       string `json:"id"`
	Password string `json:"password"`
	Email    string `json:"email"`
}

// GetUser is that export user's informatin as ID
func GetUser(id string) user {
	defer conn.Close()

	userInfo := user{}

	var err = conn.QueryRow("select * from user where id=" + id).Scan(&userInfo)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	return userInfo
}
