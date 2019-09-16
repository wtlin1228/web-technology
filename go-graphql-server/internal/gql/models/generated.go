// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package gqlmodels

type CategoryInput struct {
	Name *string `json:"name"`
}

type DessertInput struct {
	Name           *string `json:"name"`
	Description    *string `json:"description"`
	Unit           *string `json:"unit"`
	Amount         *int    `json:"amount"`
	AmountMinimum  *int    `json:"amountMinimum"`
	AmountInterval *int    `json:"amountInterval"`
	DegreeTop      *string `json:"degreeTop"`
	DegreeDown     *string `json:"degreeDown"`
	BakingTime     *int    `json:"bakingTime"`
	BigImageURL    *string `json:"bigImageUrl"`
	SmallImageURL  *string `json:"smallImageUrl"`
	ThumbnailURL   *string `json:"thumbnailUrl"`
	CategoryID     *string `json:"categoryId"`
}

type IngredientGroupInput struct {
	Name      *string `json:"name"`
	DessertID *string `json:"dessertId"`
}

type IngredientInput struct {
	Name              *string `json:"name"`
	Unit              *string `json:"unit"`
	Amount            *int    `json:"amount"`
	IngredientGroupID *string `json:"ingredientGroupId"`
}

type StepInput struct {
	Name      *string `json:"name"`
	Content   *string `json:"content"`
	Notice    *string `json:"notice"`
	Order     *int    `json:"order"`
	DessertID *string `json:"dessertId"`
}
