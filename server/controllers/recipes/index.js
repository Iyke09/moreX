// import createRecipe from './addRecipe';
// import deleteRecipe from './deleteRecipe';
// import favoriteRecipe from './favoriteRecipe';
// import reviewRecipe from './reviewRecipe';
// import sortRecipe from './sortRecipe';
import allRecipe from './allRecipe';
import addRecipe from './addRecipe';
import deleteRecipe from './deleteRecipe';
import updateRecipe from './updateRecipe';
import addReview from './addReview';

const recipesController = {
  allRecipe,
  addReview,
  addRecipe,
  updateRecipe,
  deleteRecipe
};

export default recipesController;