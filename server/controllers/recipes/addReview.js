import recipes from '../../data/recipes';

const addReview = (req, res) => {
  try {
    res.status(201).send(recipes.setReview(parseInt(req.params.id, 10), req.body.name, req.body.content));
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default addReview;
