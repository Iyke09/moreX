import recipes from '../../data/recipes';


const updateRecipe = (req, res) => {
  try {
    res.status(201).send({
      message: 'recipe updated',
      recipe: recipes.updateRecipe(parseInt(req.params.id, 10), req.body.title, req.body.category)
    });
  } catch (err) {
    res.status(404).send({
      message: err.message
    });
  }
};

export default updateRecipe;
