const mongoose = require("mongoose")
const Ads = require("../models/AdsModel")

exports.addAds = async (req, res) => {
  // console.log(req.body)

  try {
    const ads = await new Ads(req.body).save()
    res.status(201).json({
      message: "Ads us added",
      ads,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: err.message })
  }
}

exports.getAdsById = async (req, res) => {
  const adsId = req.params.adsId
  const checkedId = mongoose.isValidObjectId(adsId)

  if (!checkedId) {
    res.status(400).json({
      message: `Cannot find Ads with Ads ID: ${adsId}`,
    })
  }

  try {
    let ads = await Ads.findById(adsId)

    if (!ads) {
      return res.status(404).json({
        message: "No ads found",
      })
    }
    res.status(200).json({
      success: true,
      ads,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteAds = async (req, res) => {
  const adsId = req.params.adsId
  Ads.findOneAndDelete({ _id: adsId })
    .then((removedAds) => {
      if (removedAds) {
        res.json({
          message: `Successfully deleted ads`,
        })
      } else {
        res.json({
          message: `No about with id ${adsId} matches the provided query.`,
        })
      }
      return removedAds
    })
    .catch((err) => console.error(`Failed to find and delete about: ${err}`))
}

exports.updateAds = async (req, res) => {
  let updateAds = req.body
  let adsId = req.params.adsId
  const checkedId = mongoose.isValidObjectId(adsId)

  try {
    if (!checkedId) {
      res.json({ message: `Cannot find ads with id ${adsId}.` })
    }
    const updatedAds = await Ads.findOneAndUpdate(adsId, updateAds, {
      new: true,
    }).exec()
    res.status(200).json({
      updatedAds,
    })
  } catch (err) {
    res.status(400).json({
      err: err.message,
    })
  }
}
