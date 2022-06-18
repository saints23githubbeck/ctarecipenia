const slugify = require("slugify")
const Category = require("../models/CategoryModel")
const Recipe = require("../models/RecipeModel")

exports.createCategory = async (req, res) => {
  const { title, icon, permalink } = req.body
  let slug = slugify(title).toLowerCase()

  const duplicate = await Category.findOne({ slug })

  if (duplicate) {
    return res.status(404).json({ message: "Duplicate category title" })
  }

  let category = new Category({ title, slug, icon, permalink })

  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    return res.json(data)
  })
}

exports.getAll = async (req, res) => {
  Category.find({}).exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      })
    }
    return res.json(categories)
  })
}

exports.getBySlug = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  if (!slug) {
    return res.status(404).json({ message: "Slug is required" })
  }

  Category.findOne({ slug }).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      })
    }

    Recipe.find({ category: category })
      .populate("category", "_id title permalink slug")
      .populate("postedBy", "_id username image")
      .select("_id title slug description category postedBy  createdAt updatedAt")
      .sort({ createdAt: "desc" })
      .exec((err, data) => {
        //console.log(data)
        if (err) {
          return res.status(400).json({
            error: err,
          })
        }
        return res.json({ recipe: data, category })
      })
  })
}

exports.removeCategory = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  Category.findOneAndDelete({ slug }).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    return res.json({
      message: "Category deleted.",
    })
  })
}
