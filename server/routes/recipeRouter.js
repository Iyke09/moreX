import express from 'express';
import recipeController from '../controllers/recipes';

const router = express.Router();

router.get('/', recipeController.allRecipe);

router.post('/', recipeController.addRecipe);

module.exports = router;