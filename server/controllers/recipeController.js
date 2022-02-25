const Recipe = require("../models/RecipeModel")
const mongoose = require("mongoose")

/*
    @route  /add-recipe
    @desc   Adds a recipe to the database
    @access Private
*/

exports.addRecipe = async (req, res) => {
  try {
     console.log(req.body, "serve body log")
    const recipe = await new Recipe(req.body).save()
    res.status(201).json({
      message: "Recipe added",
      recipe,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: err.message })
  }
}

/*
    @route  /recipes
    @desc   Fetches all recipes from the database
    @access Public
*/
exports.getRecipes = async (req, res) => {
  //console.log("get recipes")
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
    @desc   Fetch a recipe from the database by ID
    @access Private
*/
exports.getRecipeById = async (req, res) => {
  const recipeId = req.params.recipeId
  const checkedId =
    mongoose.isValidObjectId(recipeId) /* will return true/false */
  //console.log(checkedId)
  if (!checkedId) {
    res.status(400).json({
      message: "No recipe with id " + checkedId + " exists",
    })
  }

  try {
    let recipe = await Recipe.findById(recipeId)
    //console.log({ "found recipe": recipe })

    if (!recipe) {
      return res.status(404).json({
        message: "No recipe found",
      })
    }
    res.status(200).json({
      success: true,
      recipe,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
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
      } else {
        res.json({ message: "No recipe matches the provided query." })
      }
      return deletedRecipe
    })
    .catch((err) => console.error(`Failed to find and delete recipe: ${err}`))
}

/*
    @route  /recipe/:recipeId
    @desc    Update a recipe information
    @access private
*/

exports.updateRecipe = async (req, res) => {
  let updateRecipe = req.body
  let recipeId = req.params.recipeId
  const checkedId = mongoose.isValidObjectId(recipeId)
  try {
    if (!checkedId) {
      res.json({ message: "No recipe with id " + checkedId + " exists" })
    }
    const updatedRecipe = await Recipe.findOneAndUpdate(
      recipeId,
      updateRecipe,
      {
        new: true,
      }
    ).exec()
    res.status(200).json({
      updatedRecipe,
    })
  } catch (err) {
    //console.log("Recipe update failed ----> ", err)
    res.status(400).json({
      err: err.message,
    })
  }
}
