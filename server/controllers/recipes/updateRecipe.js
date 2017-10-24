import recipeData from '../../data/recipes'


const updateRecipe = (req,res) => {
  for (let i = 0; i < recipeData.length; i++) {
    if (recipeData[i].id === parseInt(req.params.id, 10)) {
      let obj = {
        id: req.params.id,
        title: req.body.title || recipeData[i].title,
        caption: req.body.category || recipeData[i].caption
        // description: req.body.description,
      }
      recipeData.splice(i, 1, obj);
      return res.status(200).json({
        status: 'success',
        message: 'Successfully updated',
        recipe: recipeData
      });
    }
  }
  return res.status(404).json({
    message: 'Recipe not found',
    status: 'Unsuccesful'
  });
}

export default updateRecipe;