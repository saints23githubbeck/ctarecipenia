const slugify = require("slugify")
const Ads = require("../models/AddsModel")

exports.addAds = async (req, res) => {
  const { location, title, image, code } = req.body
  const slug = slugify(title).toLowerCase()

  const ads = new Ads({ location, title, image, code, slug })

  ads.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    return res.json(data)
  })
}

exports.fetchAllAds = async (req, res) => {
  Ads.find({}).exec((err, ads) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      })
    }
    return res.json(ads)
  })
}

exports.updateAds = async (req, res) => {
  let slug = req.params.slug.toLowerCase()

  try {
    const updatedAds = await Ads.findOneAndUpdate(
      slug,
      { $set: req.body },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    ).exec()
    return res.status(200).json({
      updatedAds,
    })
  } catch (err) {
    return res.status(400).json({
      err: err.message,
    })
  }
}

exports.deleteAds = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  Ads.findOneAndDelete({ slug }).exec((err, ads) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    return res.json({
      message: "Ads deleted.",
    })
  })
}
