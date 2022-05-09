const slugify = require("slugify")
const Category = require("../models/CategoryModel")
const Recipe = require("../models/RecipeModel")

exports.createCategory = (req, res) => {
  const { title, icon, permalink } = req.body
  let slug = slugify(title).toLowerCase()

  let category = new Category({ title, slug, icon, permalink })

  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json(category)
  })
}

exports.getAll = (req, res) => {
  Category.find({}).exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      })
    }
    res.json(categories)
  })
}

exports.getBySlug = (req, res) => {
  const slug = req.params.slug.toLowerCase()

  Category.findOne({ slug }).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      })
    }

    Recipe.find({ categories: category })
      .populate("categories", "_id title permalink slug")
      .populate("postedBy", "_id username")
      .select(
        "_id title slug description categories postedBy  createdAt updatedAt"
      )
      .exec((err, data) => {
        //console.log(data)
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          })
        }
        res.json({ category: category, recipe: data })
      })
  })
}

exports.removeCategory = (req, res) => {
  const slug = req.params.slug.toLowerCase()

  Category.findOneAndDelete({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json({
      message: "Category deleted.",
    })
  })
}