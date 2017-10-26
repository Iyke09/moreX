import recipes from '../../data/recipes';

const upvoteRecipe = (req, res) => {
  try {
    res.status(200).send(recipes.downvoteHandler(parseInt(req.params.id, 10)));
  } catch (err) {
    res.status(200).send(err.message);
  }
};

export default upvoteRecipe;
