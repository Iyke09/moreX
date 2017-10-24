import recipeData from '../../data/recipes'


const deleteRecipe = (req,res) => {
  for (let i = 0; i < recipeData.length; i++) {
    if (recipeData[i].id === parseInt(req.params.id, 10)) {
      recipeData.splice(i, 1);
      return res.status(200).json({
        status: 'success',
        message: 'Successfully deleted',
        recipe: recipeData
      });
    }
  }
  return res.status(404).json({
    message: 'Recipe not found',
    status: 'Unsuccesful'
  });
}

export default deleteRecipe;