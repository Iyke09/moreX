import recipes from '../../data/recipes'


const updateRecipe = (req,res) => {
  try{
    res.send(recipes.updateRecipe(parseInt(req.params.id,10),req.body.title,req.body.category))
  } catch (err){
    res.send(err.message)
  }
}

export default updateRecipe;