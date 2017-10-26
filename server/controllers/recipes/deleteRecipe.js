import recipes from '../../data/recipes';

const deleteRecipe = (req, res) => {
  try {
    res.status(200).send({
      message: 'recipe deleted',
      recipes: recipes.deleteRecipe(parseInt(req.params.id, 10))
    });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

export default deleteRecipe;
