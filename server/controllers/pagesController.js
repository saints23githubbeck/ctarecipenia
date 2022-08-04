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
  let paramSlug = req.params.slug.toLowerCase()
  const { title, content, permalink } = req.body

  const pageUpdate={}

  if (title){
pageUpdate.title = title
  const slug = slugify(title).toLowerCase()
  pageUpdate.slug = slug
  }
  if (content) {
pageUpdate.content = content
  }
  if (permalink){
pageUpdate.permalink = permalink
  }
  
  try {
    const updatedPage = await Page.findOneAndUpdate(
      {slug: paramSlug},
      { $set: pageUpdate },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    ).exec()
    return res.status(200).json({message: "Page has been updated",
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
