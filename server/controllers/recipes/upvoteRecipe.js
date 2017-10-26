import recipes from '../../data/recipes';

const upvoteRecipe = (req, res) => {
  try {
    res.status(200).send({
      message: 'recipe upvoted',
      recipe: recipes.upvoteHandler(parseInt(req.params.id, 10))
    });
  } catch (err) {
    res.status(404).send({
      message: err.message
    });
  }
};

export default upvoteRecipe;
