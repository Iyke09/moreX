import recipes from '../../data/recipes';


const addRecipe = (req, res) => {
  if (req.body.title === undefined || req.body.title.length === 0) {
    res.status(400).send({
      message: 'please fill in the details'
    });
  }
  const recipeObj = {
    id: 1,
    title: req.body.title,
    caption: req.body.category
  };
  res.status(201).send({
    message: 'recipe created',
    recipe: recipes.addRecipe(recipeObj)
  });
};

export default addRecipe;
