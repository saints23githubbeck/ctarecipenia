const Recipe = require("../models/RecipeModel")
const slugify = require("slugify")

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

  const username = req.user.username

  const { title, category, cookTime, calories, description, direction, permLink, difficulty, prepareTime, serves } = req.body
  try {
    if (!title || !category || !cookTime || !calories || !description || !direction || !permLink || !difficulty || !prepareTime || !serves) {
      res.status(400).json({ error: "Please fill all required fields" })
    }

    const slug = slugify(title).toLowerCase()

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
      postedBy: req.user._id,
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
exports.fetchAllRecipes = (req, res) => {
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
    const recipe = await Recipe.findOne(slug)

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

exports.fetchRecipeByUser = (req, res) => {
  User.findOne({ username: req.params.username }).exec((error, user) => {
    if (error) {
      return res.status(400).json({
        error: error,
      })
    }
    let userId = user._id
    Recipe.find({ postedBy: userId })
      .populate("categories", "_id title slug icon permalink")
      .populate("postedBy", "_id name username")
      .select("_id title slug postedBy createdAt updatedAt")
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
  let updateRecipe = req.body
  let slug = req.params.slug.toLowerCase()

  try {
    const updatedRecipe = await Recipe.findOneAndUpdate(slug, updateRecipe, {
      new: true,
    }).exec()
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

/** Search through recipe post */
exports.searchRecipe = (req, res) => {
  //console.log(req.query)
  const { search } = req.query
  if (search) {
    Recipe.find(
      {
        $or: [{ title: { $regex: search, $options: "i" } }, { body: { $regex: search, $options: "i" } }],
      },
      (error, recipes) => {
        if (error) {
          return res.status(400).json({
            error: error,
          })
        }
        return res.json(recipes)
      }
    ).select("-image -description")
  }
}

exports.canDeleteRecipe = (req, res, next) => {
  const slug = req.params.slug.toLowerCase()
  Recipe.findOne({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
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
        error: errorHandler(err),
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
