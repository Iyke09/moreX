import express from 'express';
import recipeController from '../controllers/recipes';

const router = express.Router();

router.get('/', recipeController.allRecipe);

router.post('/', recipeController.addRecipe);

router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;