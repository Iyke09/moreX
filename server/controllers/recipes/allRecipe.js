import recipes from '../../data/recipes'

const allRecipe = (req,res) => {
	res.status(200).send({
		status: 'Success',
		message: 'Welcome to More-Recipes',
		recipes: recipes.allRecipes()
	})
}

export default allRecipe;