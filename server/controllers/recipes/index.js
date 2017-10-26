// import createRecipe from './addRecipe';
// import deleteRecipe from './deleteRecipe';
// import favoriteRecipe from './favoriteRecipe';
// import reviewRecipe from './reviewRecipe';
// import sortRecipe from './sortRecipe';
import allRecipe from './allRecipe';
import addRecipe from './addRecipe';
import deleteRecipe from './deleteRecipe';
import updateRecipe from './updateRecipe';
import upvoteRecipe from './upvoteRecipe';
import downvoteRecipe from './downvoteRecipe';
import addReview from './addReview';
import recipeSort from './recipeSort';

const recipesController = {
  allRecipe,
  upvoteRecipe,
  downvoteRecipe,
  recipeSort,
  addReview,
  addRecipe,
  updateRecipe,
  deleteRecipe
};

export default recipesController;
