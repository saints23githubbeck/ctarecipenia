const Recipe = require("../models/RecipeModel")

/*
    @route  /add-recipe
    @desc   Adds a recipe to the database
    @access Private
*/

exports.addRecipe = async (req, res) => {
  try {
    // console.log(req.body)
    const recipe = await new Recipe(req.body).save()
    res.status(201).json({
      message: "Recipe added",
      recipe,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: err.message })
    res.send("Unable to add recipe")
  }
}

/*
    @route  /recipes
    @desc   Fetches all recipes from the database
    @access Public
*/
exports.getRecipes = async (req, res) => {
  //console.log("get recipes");
  try {
    let totalRecipes = await Recipe.countDocuments()
    const recipes = await Recipe.find({})
      .sort([["createdAt", "asc"]])
      .exec()
    if (!recipes) {
      return res.status(400).json({ error: [{ message: "Recipes not found" }] })
    }
    res.status(200).json({
      success: true,
      recipes,
      totalRecipes,
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

/*
    @route  /recipe/:recipeId
    @desc   Delete a recipe from the database by ID
    @access Private
*/

exports.deleteRecipeById = async (req, res) => {
  Recipe.findOneAndDelete({ _id: req.params.recipeId })
    .then((deletedRecipe) => {
      if (deletedRecipe) {
        res.json({
          message: `Successfully deleted recipe that had the form: ${deletedRecipe}.`,
        })
        // console.log(
        //   `Successfully deleted recipe that had the form: ${deletedRecipe}.`
        // )
      } else {
        //console.log("No document matches the provided query.")
        res.json({ message: "No recipe matches the provided query." })
      }
      return deletedRecipe
    })
    .catch((err) => console.error(`Failed to find and delete recipe: ${err}`))
}

/*
    @route  /recipe/:recipeId
    @desc   Fetch a recipe from the database by ID
    @access Private
*/
exports.getRecipeById = async (req, res) => {
  let recipe = await Recipe.findById(req.params.recipeId)
  //console.log({ "found recipe": recipe })
  if (!recipe) {
    throw new Error("Recipe not found")
  }
  res.status(200).json({
    success: true,
    recipe,
  })
}
