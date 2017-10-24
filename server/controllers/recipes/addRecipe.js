import recipeData from '../../data/recipes'


const addRecipe = (req,res) => {
	if(req.body.title === undefined || req.body.title.length === 0){
		res.status(400).send({
			message: 'please fill in the details'
		})
	}
	let recipeObj = {
    id: recipeData.length + 1,
    title: req.body.title,
    caption: req.body.category
    // description: req.body.description,
    // image: req.body.image
  }
  recipeData.push(recipeObj)
	res.status(200).send({
		status: 'Success',
		message:'Recipe created successfully',
		recipes: recipeData
	})
}

export default addRecipe;