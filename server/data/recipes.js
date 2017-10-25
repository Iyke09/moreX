/*
 * @class Recipe
 * @classdesc this class does something
 */
class Recipe {
  constructor(recipe,id){
    this.id = id;
    this.title = recipe.title;
    this.upvote = 0;
    this.downvote = 0;
    this.review = [];
  }

  /**
   * 
   * @param {string} recipe
   * @return {} 
   */
  addReview(recipex){
    this.review.push(recipex);
    return this;
  }

  upvoteRecipe(){
    this.upvote += 1
    return this;
  }
}

class Review {
  constructor(name, content){
    this.name = name;
    this.content = content;
  }
}

class Recipes {
  constructor(){
    this.recipes = [
      {
        id: 1,
        title: 'Cheese-burger',
        caption:'Lunch #hamont',
        upvote: 0,
        downvote: 0,
        description:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        image:'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg'
      },
      {
        id: 2,
        title: 'Cheese-burger',
        caption:'Lunch #hamont',
        upvote: 0,
        downvote: 0,
        description:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        image:'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg'
      }
    ]
  }

  allRecipes(key,order){
    if(key === undefined || order === undefined){
      return this.recipes;
    }else{
      if(order === 'des'){
        return this.recipes.sort((curr,next) => {
          return next[key] - curr[key]
        })
      }else{
        return this.recipes.sort((curr,next) => {
          return curr[key] - next[key]
        })
      }
    }
  }

  addRecipe(recipe){
    const recipeLength = this.recipes.length
    const newRecipe = new Recipe(recipe,recipeLength + 1);
    this.recipes.push(newRecipe);
    return newRecipe;
  }
  
  setReview(id,name,content) {
    const check = this.recipes.filter((e) => e.id === id)
    if (check.length === 0){
      throw Error('not found')
    }else{
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].id === id) {
          const review = new Review(name,content)
          console.log(review)
          return this.recipes[i].addReview(review)
        }
      }
    }
  }

  upvoteHandler(id,name,content) {
    const check = this.recipes.filter((e) => e.id === id)
    if (check.length === 0){
      throw Error('not found')
    }else{
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].id === id) {
          return this.recipes[i].upvoteRecipe()
        }
      }
    }
  }

  deleteRecipe(id) {
    const check = this.recipes.filter((e) => e.id === id)
    if (check.length === 0){
      throw Error('not found')
    }else{
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].id === id) {
          this.recipes.splice(i, 1);
          return this.recipes;
        }
      }
    }
  }

  updateRecipe(id,title,category) {
    const check = this.recipes.filter((e) => e.id === id)
    if (check.length === 0){
      throw Error('not found')
    }else{
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].id === id) {
          const rev = {
            name: 'jane',
            content: 'hello bae'
          }
          const obj = {
            id: id,
            title: title || this.recipes[i].title,
            caption: category || this.recipes[i].caption
          }
          this.recipes.splice(i, 1, obj);
          return this.recipes;
        }
      }
    }
  }
}


const recipes = new Recipes()

export default recipes;