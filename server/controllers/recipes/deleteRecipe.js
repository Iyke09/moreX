import recipes from '../../data/recipes'

const deleteRecipe = (req,res) => {
  try{
    res.send(recipes.deleteRecipe(parseInt(req.params.id,10)))
  } catch (err){
    res.send(err.message)
  }
}

export default deleteRecipe;