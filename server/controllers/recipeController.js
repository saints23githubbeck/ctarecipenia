const Recipe = require("../models/RecipeModel")
const slugify = require("slugify")
const User = require("../models/userModel")

/*
    @route  /add-recipe
    @desc   Adds a recipe to the database
    @access Private
*/

exports.addRecipe = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      error: "Please Sign in first",
    })
  }

  const { title, category, cookTime, calories, description, direction, permLink, difficulty, prepareTime, serves } = req.body

  const slug = slugify(title).toLowerCase()
  try {
    if (!title || !category || !cookTime || !calories || !description || !direction || !permLink || !difficulty || !prepareTime || !serves) {
      res.status(400).json({ error: "Please fill all required fields" })
    }

    const duplicate = await Recipe.findOne({
      $or: [{ slug }, { title }],
    })

    if (duplicate) {
      return res.status(400).json({ error: "Recipe with same 'Title' exists" })
    }

    const recipe = await new Recipe(req.body)
    recipe.slug = slug
    recipe.postedBy = req.user._id
    recipe.save(function (err) {
      console.log(err)
    })

    return res.status(201).json({
      message: "Recipe added",
      recipe,
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: err.message })
  }
}

/*
    @route  /recipes
    @desc   Fetches all recipes from the database
    @access Public
*/
exports.fetchAllRecipes = async (req, res) => {
  Recipe.find({})
    .populate("postedBy", "_id image status username")
    .select("_id category cookTime calories description slug direction permLink image difficulty prepareTime serves postedBy createdAt updatedAt")
    .sort({ createdAt: "desc" })
    .exec((error, data) => {
      if (error) {
        return res.json({
          error: error,
        })
      }
      res.json({ success: true, data, recipe_length: data.length })
    })
}

/*
    @route  /recipe/:slug
    @desc   Fetch a recipe from the database by slug
    @access Private
*/
exports.getRecipeBySlug = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  try {
    const recipe = await Recipe.findOne({ slug })

    if (!recipe) {
      return res.status(404).json({
        error: "No recipe found",
      })
    }
    return res.status(200).json({
      success: true,
      recipe,
    })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

/*
    @route  /recipe/:slug
    @desc   Delete a recipe from the database by slug
    @access Private
*/

exports.deleteRecipe = async (req, res) => {
  const slug = req.params.slug.toLowerCase()
  if (!slug) {
    return res.status(401).json({ error: "No slug found" })
  }

  Recipe.findOneAndDelete(slug)
    .then((deletedRecipe) => {
      if (deletedRecipe) {
        return res.json({
          message: `Successfully deleted  ${deletedRecipe.title} recipe .`,
        })
      } else {
        return res.json({ error: "No recipe matches the provided query." })
      }
    })
    .catch((err) => {
      console.error(`Failed to find and delete recipe: ${err}`)
      return res.status(404).json({ error: err.message })
    })
}

exports.fetchRecipeByUser = async (req, res) => {
  User.findOne({ username: req.params.username }).exec(async (error, user) => {
    if (error) {
      return res.status(400).json({
        error: error,
      })
    }

    Recipe.find({ postedBy: user._id })
      .populate("postedBy", "_id name username image")
      .sort({ createdAt: "desc" })
      .exec((error, data) => {
        if (error) {
          return res.status(400).json({
            error: error,
          })
        }
        return res.json(data)
      })
  })
}

/*
    @route  /recipe/:slug
    @desc    Update a recipe information
    @access private
*/

exports.updateRecipe = async (req, res) => {
  const { title, category, image, cookTime, calories, description, direction, permLink, difficulty, prepareTime, serves } = req.body
  const recipeUpdate = {}

  if (title) {
    recipeUpdate.title = title
    const slug = slugify(title).toLowerCase()
    recipeUpdate.slug = slug
  }
  if (category) {
    recipeUpdate.category = category
  }
  if (cookTime) {
    recipeUpdate.cookTime = cookTime
  }
  if (image) {
    recipeUpdate.image = image
  }

  if (calories) {
    recipeUpdate.calories = calories
  }
  if (description) {
    recipeUpdate.description = description
  }
  if (direction) {
    recipeUpdate.direction = direction
  }
  if (permLink) {
    recipeUpdate.permLink = permLink
  }
  if (difficulty) {
    recipeUpdate.difficulty = difficulty
  }

  if (prepareTime) {
    recipeUpdate.prepareTime = prepareTime
  }

  if (serves) {
    recipeUpdate.serves = serves
  }

  let paramSlug = req.params.slug.toLowerCase()

  try {
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { slug: paramSlug },
      { $set: recipeUpdate },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    ).exec()
    return res.status(200).json({
      updatedRecipe,
    })
  } catch (err) {
    //console.log("Recipe update failed ----> ", err)
    return res.status(400).json({
      err: err.message,
    })
  }
}

exports.canDeleteRecipe = (req, res, next) => {
  const slug = req.params.slug.toLowerCase()
  Recipe.findOne({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    let authorizedUser = data.postedBy._id.toString() === req.user._id.toString()
    if (!authorizedUser) {
      return res.status(400).json({
        error: "You are not authorized",
      })
    }
    next()
  })
}

exports.canUpdateRecipe = (req, res, next) => {
  const slug = req.params.slug.toLowerCase()
  Recipe.findOne({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    let authorizedUser = data.postedBy._id.toString() === req.user._id.toString()
    if (!authorizedUser) {
      return res.status(400).json({
        error: "You are not authorized",
      })
    }
    next()
  })
}
