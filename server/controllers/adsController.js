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
  let paramSlug = req.params.slug.toLowerCase()
    const { location, title, image, code } = req.body
const adsUpdate ={}

if(title) {
  adsUpdate.title = title
  const slug = slugify(title).toLowerCase()
  adsUpdate.slug = slug
}

if(image){
  adsUpdate.image = image
}

if(code){
  adsUpdate.code = code
}
if (location) {
  adsUpdate.location = location
}

  try {
    const updatedAds = await Ads.findOneAndUpdate(
      { slug: paramSlug },
      { $set: adsUpdate },
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
