import recipes from '../../data/recipes';

const sortRecipe = (req, res) => {
  try {
    res.send(recipes.sort(req.query.sort, req.query.order));
  } catch (err) {
    res.send(err.message);
  }
};

export default sortRecipe;
