
[![Build Status](https://travis-ci.org/Iyke09/moreX.svg?branch=integrationSetup)](https://travis-ci.org/Iyke09/moreX)
[![Coverage Status](https://coveralls.io/repos/github/Iyke09/moreX/badge.svg?branch=integrationSetup)](https://coveralls.io/github/Iyke09/moreX?branch=integrationSetup)

## More Recipes
The more recipes app is simply a simple that enables users share their recipes with other fellow users and be able to get reviews and likes for their recipes.

### To Run:

- clone this repo by typing
```
 git clone https://github.com/Iyke09/moreX.git
```
- then cd into moreX

```
 run npm install && npm run start:dev
```
- then check it out in browser at localhost:8000

### Available routes

- **GET** http://localhost:8000/api/v1/recipes - to get all available recipes

- **PUT** http://localhost:8000/api/v1/recipes/1 - to update a recipes with ID of 1

- **DELETE** http://localhost:8000/api/v1/recipes/1 - to delete a recipe with ID of 1

- **POST** http://localhost:8000/api/v1/recipes - to add a recipe

- **PUT** http://localhost:8000/api/v1/recipes/1/upvote - to upvote recipe with ID of 1

- **PUT** http://localhost:8000/api/v1/recipes/1/downvote - to downvote recipe with ID of 1

- **POST** http://localhost:8000/api/v1/recipes/1/review - to add a review for recipe with ID of 1