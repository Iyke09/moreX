import recipeData from '../../data/recipes'


const allRecipe = (req,res) => {
	res.status(200).send({
		status: 'Success',
		message: 'Welcome to More-Recipes',
		recipes: recipeData
	})
}

export default allRecipe;