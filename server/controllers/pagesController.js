const Page = require("../models/PagesModel")
const slugify = require("slugify")

exports.addPage = async (req, res) => {
  const { title, content, permalink } = req.body
  const slug = slugify(title).toLowerCase()

  const page = new Page({ title, content, permalink, slug })

  page.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    return res.json(data)
  })
}

exports.getAll = async (req, res) => {
  Page.find({}).exec((err, pages) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      })
    }
    return res.json(pages)
  })
}

exports.updatePage = async (req, res) => {
  let slug = req.params.slug.toLowerCase()

  try {
    const updatedPage = await Page.findOneAndUpdate(
      slug,
      { $set: req.body },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    ).exec()
    return res.status(200).json({
      updatedPage,
    })
  } catch (err) {
    return res.status(400).json({
      err: err.message,
    })
  }
}

exports.deletePage = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  Page.findOneAndDelete({ slug }).exec((err, page) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    return res.json({
      message: "Page deleted.",
    })
  })
}
