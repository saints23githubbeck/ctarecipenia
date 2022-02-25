const mongoose = require("mongoose")
const About = require("../models/AboutUsModel")

exports.addAbout = async (req, res) => {
  // console.log(req.body)

  try {
    const about = await new About(req.body).save()
    res.status(201).json({
      message: "About us added",
      about,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: err.message })
  }
}

exports.getAboutById = async (req, res) => {
  const aboutId = req.params.aboutId
  const checkedId = mongoose.isValidObjectId(aboutId)

  if (!checkedId) {
    res.status(400).json({
      message: `Cannot find blog with blog ID: ${aboutId}`,
    })
  }

  try {
    let about = await About.findById(aboutId)

    if (!about) {
      return res.status(404).json({
        message: "No about found",
      })
    }
    res.status(200).json({
      success: true,
      about,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteAbout = async (req, res) => {
  const aboutId = req.params.aboutId
  About.findOneAndDelete({ _id: aboutId })
    .then((deletedAbout) => {
      if (deletedAbout) {
        res.json({
          message: `Successfully deleted about`,
        })
      } else {
        res.json({
          message: `No about with id ${aboutId} matches the provided query.`,
        })
      }
      return deletedAbout
    })
    .catch((err) => console.error(`Failed to find and delete about: ${err}`))
}

exports.updateAbout = async (req, res) => {
  let updateAbout = req.body
  let aboutId = req.params.aboutId
  const checkedId = mongoose.isValidObjectId(aboutId)

  try {
    if (!checkedId) {
      res.json({ message: `Cannot find about with id ${aboutId}.` })
    }
    const updatedAbout = await Blog.findOneAndUpdate(blogId, updateAbout, {
      new: true,
    }).exec()
    res.status(200).json({
      updatedAbout,
    })
  } catch (err) {
    res.status(400).json({
      err: err.message,
    })
  }
}
