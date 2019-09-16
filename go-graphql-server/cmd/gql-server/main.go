package main

import (
	log "log"

	"github.com/wtlin1228/go-graphql-server/internal/orm"
	"github.com/wtlin1228/go-graphql-server/pkg/server"
)

func main() {
	// Create a new ORM instance to send it to our server
	orm, err := orm.Factory()
	if err != nil {
		log.Panic(err)
	}
	// Send: ORM instance
	server.Run(orm)
}
