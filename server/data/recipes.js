/**
 * Creates a new Person.
 * @class
 */
class Recipe {
  /**
 * @constructor
 * @param {object} recipe - a single recipe.
 * @param {number} id - id of the recipe.
 */
  constructor(recipe, id) {
    this.id = id;
    this.title = recipe.title;
    this.upvote = 0;
    this.downvote = 0;
    this.review = [];
  }

  /**
   *
   * @param {object} recipex a review object
   * @return {object} return a recipe oject
   */
  addReview(recipex) {
    this.review.push(recipex);
    return this;
  }
  /**
   *
   * @return {object} return back the recipe object
   */
  upvoteRecipe() {
    this.upvote += 1;
    return this;
  }
    /**
   *
   * @return {object} return back the recipe object
   */
  downvoteRecipe() {
    this.downvote += 1;
    return this;
  }
}
/**
 * Creates a new Review.
 * @class
 */
class Review {
    /**
 * @constructor
 * @param {string} name - reviewer's name.
 * @param {string} content - content of review.
 */
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
}
/**
 * Creates a new Recipe.
 * @class
 */
class Recipes {
  /**
 * @constructor
 */
  constructor() {
    this.recipes = [
      {
        id: 1,
        title: 'Cheese-burger',
        caption: 'Lunch #hamont',
        upvote: 0,
        downvote: 0,
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        image: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg'
      },
      {
        id: 2,
        title: 'Cheese-burger',
        caption: 'Lunch #hamont',
        upvote: 0,
        downvote: 0,
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        image: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg'
      }
    ];
  }
    /**
   *
   * @param {string} key
   * @param {string} order
   * @return {object}  return a recipe object
   */
  allRecipes(key, order) {
    if (key === undefined || order === undefined) {
      return this.recipes;
    } else {
      if (order === 'des') {
        return this.recipes.sort((curr, next) => {
          return next[key] - curr[key];
        });
      } else {
        return this.recipes.sort((curr, next) => {
          return curr[key] - next[key];
        });
      }
    }
  }

    /**
   *
   * @param {object} recipe
   * @return {array}  return an array of recipe objects
   */
  addRecipe(recipe) {
    const recipeLength = this.recipes.length;
    const newRecipe = new Recipe(recipe, recipeLength + 1);
    this.recipes.push(newRecipe);
    return newRecipe;
  }
   /**
   *
   * @param {number} id
   * @param {string} name
   * @param {string} content
   * @return {object}  return a recipe object
   */
  setReview(id, name, content) {
    const check = this.recipes.filter((e) => e.id === id);
    if (check.length === 0) {
      throw Error('not found');
    } else {
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].id === id) {
          const review = new Review(name, content);
          console.log(review);
          return this.recipes[i].addReview(review);
        }
      }
    }
  }
      /**
   *
   * @param {number} id
   * @param {string} name
   * @param {string} content
   * @return {object}  return a recipe object
   */
  upvoteHandler(id) {
    const check = this.recipes.filter((e) => e.id === id);
    if (check.length === 0) {
      throw Error('not found');
    } else {
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].id === id) {
          return this.recipes[i].upvoteRecipe();
        }
      }
    }
  }

        /**
   *
   * @param {number} id
   * @param {string} name
   * @param {string} content
   * @return {object}  return a recipe object
   */
  downvoteHandler(id) {
    const check = this.recipes.filter((e) => e.id === id);
    if (check.length === 0) {
      throw Error('not found');
    } else {
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].id === id) {
          return this.recipes[i].downvoteRecipe();
        }
      }
    }
  }

    /**
   *
   * @param {number} id
   * @return {array}  return an array of recipe object
   */
  deleteRecipe(id) {
    const check = this.recipes.filter((e) => e.id === id);
    if (check.length === 0) {
      throw Error('not found');
    } else {
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].id === id) {
          this.recipes.splice(i, 1);
          return this.recipes;
        }
      }
    }
  }
   /**
   *
   * @param {number} id
   * @param {string} title
   * @param {string} category
   * @return {object}  return a recipe object
   */
  updateRecipe(id, title, category) {
    const check = this.recipes.filter((e) => e.id === id);
    if (check.length === 0) {
      throw Error('not found');
    } else {
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].id === id) {
          const obj = {
            id,
            title: title || this.recipes[i].title,
            caption: category || this.recipes[i].caption
          };
          this.recipes.splice(i, 1, obj);
          return this.recipes;
        }
      }
    }
  }
}


const recipes = new Recipes();

export default recipes;
