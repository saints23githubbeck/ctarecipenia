const Slider = require("../models/sliderModel")
const slugify = require("slugify")

exports.addSlider = async (req, res) => {
  const { title, recipe, image } = req.body
  let slug = slugify(title).toLowerCase()

  const duplicate = await Slider.findOne({ slug })

  if (duplicate) {
    return res.status(404).json({ message: "Duplicate slider title" })
  }

  let slider = new Slider({ title, slug, recipe, image })

  slider.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    return res.json(data)
  })
}

exports.fetchSliders = async (req, res) => {
  Slider.find({})
    .sort({ createdAt: "desc" })
    .exec((error, sliders) => {
      if (error) {
        return res.json({
          error: error,
        })
      }

      res.json({ sliders, totalSliders: sliders.length })
    })
}

exports.deleteSlide = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  Slider.findOneAndDelete(slug)
    .then((deletedSlider) => {
      if (deletedSlider) {
        return res.json({
          message: `Successfully deleted slider`,
        })
      } else {
        return res.json({
          message: `No slide  matches the provided query.`,
        })
      }
    })
    .catch((err) => {
      console.error(`Failed to find and delete slide: ${err}`)
      return res.status(500).json({ error: err.message })
    })
}

exports.updateSlider = async (req, res) => {
  let slug = req.params.slug.toLowerCase()

  try {
    const updateSlider = await Slider.findOneAndUpdate(
      slug,
      { $set: req.body },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    ).exec()
    return res.status(200).json({
      updateSlider,
    })
  } catch (err) {
    return res.status(400).json({
      err: err.message,
    })
  }
}

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

  let slug = req.params.slug.toLowerCase()

  try {
    const updatedRecipe = await Recipe.findOneAndUpdate(
      slug,
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
