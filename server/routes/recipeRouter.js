import express from 'express';
import recipeController from '../controllers/recipes';

const router = express.Router();

router.get('/', recipeController.allRecipe);

router.post('/', recipeController.addRecipe);

router.delete('/:id', recipeController.deleteRecipe);

router.put('/:id', recipeController.updateRecipe);

module.exports = router;