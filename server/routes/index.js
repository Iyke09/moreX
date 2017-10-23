import express from 'express';

import recipe from './recipeRouter';

const route = express.Router();

route.use('/recipes', recipe);

module.exports = route;