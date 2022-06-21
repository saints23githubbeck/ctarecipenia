const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const Blog = require("../models/BlogModel")

exports.profileUpdate = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  try {
    //console.log("profile update req.body", req.body);
    const { password, secret, username, image, country, description, lastName, firstName, status } = req.body
    const updateInfo = {}

    if (username) {
      updateInfo.username = username
      const slug = slugify(username).toLowerCase()

      updateInfo.slug = slug
    }

    if (firstName) {
      updateInfo.firstName = firstName
    }
    if (status) {
      updateInfo.status = status
    }

    if (lastName) {
      updateInfo.lastName = lastName
    }

    if (country) {
      updateInfo.country = country
    }
    if (description) {
      updateInfo.description = description
    }

    if (secret) {
      const salt = await bcrypt.genSalt(12)
      const hashedSecret = await bcrypt.hash(secret, salt)
      updateInfo.secret = hashedSecret
    }

    if (password) {
      const salt = await bcrypt.genSalt(12)
      const hashedPassword = await bcrypt.hash(password, salt)
      updateInfo.password = hashedPassword
    }

    if (image) {
      updateInfo.image = image
    }

    const updatedUser = await User.findOneAndUpdate(
      user._id,
      { $set: updateInfo },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    )

    return res.status(200).json({ message: "Profile has been updated", updatedUser })
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ error: " Username already taken" })
    }
    return res.status(500).json({ err })
  }
})

exports.deleteUser = asyncHandler(async (req, res) => {
  const userId = req.user._id

  try {
    const user = await User.findByIdAndDelete(userId)

    return res.json({
      message: `Your account has been deleted. Goodbye! ${user.name}. Sorry to see you go. `,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: err.message })
  }
})

exports.getMyProfile = asyncHandler(async (req, res) => {
  const user = req.user

  return res.status(200).json({ user })
})

exports.getUserProfile = (req, res) => {
  let username = req.params.username

  User.findOne({ username }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      })
    }

    Blog.find({ postedBy: user._id })
      .populate("postedBy", "_id username  image user ")
      .limit(10)
      .select("_id title slug permLink prepareTime cookTime shortDesc description image category postedBy createdAt updatedAt")
      .exec((err, data) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          })
        }
        res.json({
          user,
          blogs: data,
        })
      })
  })
}

exports.fetchSubscribers = asyncHandler(async (req, res) => {
  try {
    const subscribers = await User.find({ userGroup: "subscriber" }).select("-password -secret")

    const totalNumberOfSubscribers = subscribers.length

    subscribers && res.status(200).json({ subscribers, totalNumberOfSubscribers })
  } catch (error) {
    return res.status(404).json({ errors: error.message })
  }
})

exports.canDeleteUser = (req, res, next) => {
  const slug = req.params.slug.toLowerCase()
  User.findOne({ slug }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    let authorizedUser = user._id.toString() === req.user._id.toString()
    if (!authorizedUser) {
      return res.status(400).json({
        error: "You are not authorized",
      })
    }
    next()
  })
}

exports.canUpdateUser = (req, res, next) => {
  const slug = req.params.slug.toLowerCase()
  User.findOne({ slug }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    let authorizedUser = user._id.toString() === req.user._id.toString()
    if (!authorizedUser) {
      return res.status(400).json({
        error: "You are not authorized",
      })
    }
    next()
  })
}
