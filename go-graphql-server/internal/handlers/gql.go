package handlers

import (
	"context"
	"fmt"

	"github.com/99designs/gqlgen/handler"
	"github.com/gin-gonic/gin"
	gql "github.com/wtlin1228/go-graphql-server/internal/gql/generated"
	"github.com/wtlin1228/go-graphql-server/internal/gql/resolvers"
	"github.com/wtlin1228/go-graphql-server/internal/orm"
)

// GraphqlHandler defines the GQLGen GraphQL server handler
func GraphqlHandler(orm *orm.ORM) gin.HandlerFunc {
	// NewExecutableSchema and Config are in the generated.go file
	c := gql.Config{
		Resolvers: &resolvers.Resolver{
			ORM: orm, // pass in the ORM instance in the resolvers to be used
		},
	}

	h := handler.GraphQL(gql.NewExecutableSchema(c),
		handler.RequestMiddleware(func(ctx context.Context, next func(ctx context.Context) []byte) []byte {

			fmt.Println(ctx)
			return nil

			fmt.Println("Entered request resolver")
			res := next(ctx)
			fmt.Println("Left request resolver")
			return res
		}),
	)

	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}

// PlaygroundHandler Defines the Playground handler to expose our playground
func PlaygroundHandler(path string) gin.HandlerFunc {
	h := handler.Playground("Go GraphQL Server", path)
	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}
