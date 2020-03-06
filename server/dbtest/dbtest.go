package dbtest

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

func Dbtest() {
	conn, err := sql.Open("mysql",
		"bec93c2dc41609:38086ad3@tcp(us-cdbr-iron-east-04.cleardb.net:3306)/heroku_1fccce0c3c7b53d")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	var id string

	err = conn.QueryRow("select id from user").Scan(&id)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println(id)

	defer conn.Close()
}
