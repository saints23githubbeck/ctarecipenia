const Recipe = require("../models/RecipeModel")
const slugify = require("slugify")

/*
    @route  /add-recipe
    @desc   Adds a recipe to the database
    @access Private
*/

exports.addRecipe = async (req, res) => {
  const {
    title,
    category,
    cookTime,
    calories,
    description,
    direction,
    permLink,
    difficulty,
    prepareTime,
    serves,
  } = req.body
  try {
    if (
      !title ||
      !category ||
      !cookTime ||
      !calories ||
      !description ||
      !direction ||
      !permLink ||
      !difficulty ||
      !prepareTime ||
      !serves
    ) {
      res.status(400).json({ error: "Please fill all required fields" })
    }

    const slug = slugify(username).toLowerCase()

    const recipe = await Recipe.create({
      title,
      category,
      cookTime,
      calories,
      description,
      direction,
      permLink,
      difficulty,
      prepareTime,
      serves,
      slug,
    })

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
    @route  /recipe/:slug
    @desc   Fetch a recipe from the database by slug
    @access Private
*/
exports.getRecipeBySlug = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  try {
    const recipe = await Recipe.findOne(slug)

    if (!recipe) {
      return res.status(404).json({
        error: "No recipe found",
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
    @route  /recipe/:slug
    @desc   Delete a recipe from the database by slug
    @access Private
*/

exports.deleteRecipeBySlug = async (req, res) => {
  const slug = req.params.slug.toLowerCase()
  if (!slug) {
    return res.status(401).json({ error: "No slug found" })
  }

  Recipe.findOneAndDelete(slug)
    .then((deletedRecipe) => {
      if (deletedRecipe) {
        res.json({
          message: `Successfully deleted  ${deletedRecipe.title} recipe .`,
        })
      } else {
        res.json({ error: "No recipe matches the provided query." })
      }
    })
    .catch((err) => console.error(`Failed to find and delete recipe: ${err}`))
}

/*
    @route  /recipe/:slug
    @desc    Update a recipe information
    @access private
*/

exports.updateRecipe = async (req, res) => {
  let updateRecipe = req.body
  let slug = req.params.slug.toLowerCase()

  try {
    const updatedRecipe = await Recipe.findOneAndUpdate(slug, updateRecipe, {
      new: true,
    }).exec()
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
