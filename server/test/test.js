import { expect } from 'chai';
import supertest from 'supertest';
import app from '../app';

const request = supertest(app);
const rootURL = '/api/v1';
const recipesUrl = `${rootURL}/recipes`;
// const usersUrl = `${rootURL}/users`;

let data = {};
// only used to test actions that requires a logged in user

let recipeId;


describe('API Integration Tests', () => {
  describe('Add Recipe', () => {
    beforeEach(() => {
      data = {
        title: 'Fried Rice',
        description: `Nigerian Fried Rice puts a spicy, flavorful spin on the traditional
             fried rice and is appealing on its own or served with a variety of other African food.`,
        category: 'dessert',
      };
    });

    // test if name is passed when creating a recipe
    it('return 400 if recipe name is not passed', (done) => {
      const noName = Object.assign({}, data);
      noName.title = undefined;
      request.post(recipesUrl)
        .send(noName)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('please fill in the details');
          done();
        });
    });

    it('return 201 if recipe is created', (done) => {
      const datas = Object.assign({}, data);
      data.title = 'the first recipe';
      request.post(recipesUrl)
        .send(datas)
        .end((err, res) => {
          recipeId = res.body.recipe.id;
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('recipe created');
          done();
        });
    });
  });

  describe('Review Recipes', () => {
    it('return 201 if add review successful', (done) => {
      request.post(`${recipesUrl}/${recipeId}/review`)
      .send({ name: 'jane', content: 'elo bae' })
        .end((err, res) => {
          console.log(err);
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('review sent');
          done();
        });
    });

    it('return 404 if recipe is not found', (done) => {
      request.post(`${recipesUrl}/15/review`)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('not found');
          done();
        });
    });
  });

  describe('Upvote Recipes', () => {
    it('return 201 if upvote successful', (done) => {
      request.put(`${recipesUrl}/${recipeId}/upvote`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('recipe upvoted');
          expect(res.body.recipe.upvote).to.equal(1);
          done();
        });
    });

    it('return 404 if recipe is not found', (done) => {
      request.put(`${recipesUrl}/15/upvote`)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('not found');
          done();
        });
    });
  });

  describe('Downvote Recipes', () => {
    it('return 201 if upvote successful', (done) => {
      request.put(`${recipesUrl}/${recipeId}/downvote`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('recipe downvoted');
          expect(res.body.recipe.downvote).to.equal(1);
          done();
        });
    });

    it('return 404 if recipe is not found', (done) => {
      request.put(`${recipesUrl}/15/upvote`)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('not found');
          done();
        });
    });
  });

  describe('All Recipes', () => {
    it('return 200 if get all recipes successful', (done) => {
      request.get(`${recipesUrl}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('Welcome to More-Recipes');
          expect(res.body.status).to.equal('Success');
          done();
        });
    });

    it('return the length of recipes array', (done) => {
      request.get(`${recipesUrl}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.recipes.length).to.equal(4);
          done();
        });
    });
  });

  describe('Sort Recipes', () => {
    it('return 200 if recipes is sorted successfully', (done) => {
      request.get(`${recipesUrl}?sort=upvote&&order=des`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('Welcome to More-Recipes');
          expect(res.body.recipes[0].upvote).to.equal(1);
          done();
        });
    });
  });


  describe('Update Recipes', () => {
    it('return 401 if user not logged in', (done) => {
      request.put(`${recipesUrl}/2`)
        .send({ title: 'YOLO' })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('recipe updated');
          done();
        });
    });


    it('return 404 if recipe is not found', (done) => {
      request.put(`${recipesUrl}/15`)
        .send({ title: 'YOLO' })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('not found');
          done();
        });
    });
  });


  describe('Delete Recipes', () => {
    it('return 401 if user not owner of recipe', (done) => {
      request.delete(`${recipesUrl}/2`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('recipe deleted');
          done();
        });
    });

    it('return 401 if user not owner of recipe', (done) => {
      request.delete(`${recipesUrl}/1`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('recipe deleted');
          done();
        });
    });

    it('return 404 if recipe is not found', (done) => {
      request.delete(`${recipesUrl}/15`)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('not found');
          done();
        });
    });
  });
});
