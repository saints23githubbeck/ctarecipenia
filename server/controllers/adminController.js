const asyncHandler = require("express-async-handler")
const slugify = require("slugify")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

exports.registerAdmin = asyncHandler(async (req, res) => {
  const { username, userGroup, password, email, secret } = req.body

  if (!username || !password || !email || !secret || !userGroup) {
    return res.status(400).json({ error: "Please fill all required fields" })
  }

  if (password && password.length < 6) {
    return res.json({
      error: "Password should be 6 or more characters long",
    })
  }

  if (userGroup !== "admin") {
    return res.json({
      message: "You can only register a user as an Administrator",
    })
  }

  const userExists = await User.findOne({
    $or: [{ email }, { username }],
  })

  if (userExists) {
    return res.status(400).json({ error: "User already exists" })
  }

  const slug = slugify(username).toLowerCase()
  const salt = await bcrypt.genSalt(12)
  const hashPassword = await bcrypt.hash(password, salt)
  const hashedSecret = await bcrypt.hash(secret, salt)

  const user = await User.create({
    email,
    username,
    slug,
    userGroup,
    password: hashPassword,
    secret: hashedSecret,
  })
  if (user) {
    return res.status(201).json({
      message: "Signup success! Please login.",
      success: true,
    })
  } else {
    return res.status(400).json({ message: "Registration failed. Please try again later" })
  }
})

exports.registerUserByAdmin = asyncHandler(async (req, res) => {
  const { username, userGroup, password, email, secret } = req.body
  if (!username || !password || !email || !secret || !userGroup) {
    return res.status(400).json({ error: "Please fill all required fields" })
  }

  if (password && password.length < 6) {
    return res.json({
      error: "Password should be 6 or more characters long",
    })
  }

  if (userGroup !== "subscriber") {
    return res.json({
      message: "You can only register a user as a subscriber",
    })
  }

  const userExists = await User.findOne({ $or: [{ email }, { username }] })
  if (userExists) {
    return res.status(400).json({ error: "User already exists" })
  }
  const slug = slugify(username).toLowerCase()
  const salt = await bcrypt.genSalt(12)
  const hashPassword = await bcrypt.hash(password, salt)
  const hashedSecret = await bcrypt.hash(secret, salt)

  const user = await User.create({
    email,
    username,
    slug,
    userGroup,
    password: hashPassword,
    secret: hashedSecret,
  })

  if (user) {
    return res.status(201).json({
      message: "Signup success! Please login.",
      success: true,
    })
  } else {
    return res.status(400).json({ message: "Registration failed. Please try again later" })
  }
})

exports.getUsersByAdmin = asyncHandler(async (req, res) => {
  try {
    let totalUsers = await User.countDocuments()
    const users = await User.find({ userGroup: "subscriber" })
      .select("-password -secret")
      .sort([["createdAt", "asc"]])
      .exec()
    users && res.status(200).json({ users, totalUsers })
  } catch (error) {
    return res.status(404).json({ errors: error.message })
  }
})

exports.getUserBySlugByAdmin = asyncHandler(async (req, res) => {
  try {
    const slug = req.params.slug.toLowerCase()
    const user = await User.findOne({ slug }).select("-password -secret")
    user && res.json({ user })
  } catch (error) {
    return res.status(404).json({ error: "User not found", error })
  }
})

exports.getAdminProfile = asyncHandler(async (req, res) => {
  const user = req.user
  if (!user) return res.status(404).json({ error: "User not found" })

  return res.status(200).json({ user })
})

exports.updateAdmin = asyncHandler(async (req, res) => {
  const { username, firstName, lastName, country, userGroup, image, description, email, status } = req.body
  try {
    const userId = req.user._id
    const user = await User.findById({ _id: userId }).select("-password -secret")

    if (user) {
      user.userGroup = userGroup || user.userGroup
      user.username = username || user.username
      user.firstName = firstName || user.firstName
      user.lastName = lastName || user.lastName
      user.email = email || user.email
      user.country = country || user.country
      user.description = description || user.description
      user.image = image || user.image
      user.slug = slugify(username).toLowerCase() || user.slug
      user.status = status || user.status

      const updatedUser = await user.save()

      updatedUser.password = undefined
      updatedUser.secret = undefined

      return res.status(200).json({
        message: "User info updated",
        updatedUser,
      })
    } else {
      return res.status(404).json({ error: "User not found" })
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

exports.deleteUserByAdmin = asyncHandler(async (req, res) => {
  const slug = req.params.slug.toLowerCase()
  try {
    const user = await User.findOneAndDelete(slug)

    return res.json({
      message: `${user.username}'s account has been deleted. `,
    })
  } catch (err) {
    return console.log(err)
  }
})

exports.fetchAdmins = asyncHandler(async (req, res) => {
  try {
    const admins = await User.find({ userGroup: "admin" }).select("-password -secret")
    const totalNumberOfAdmin = admins.length
    admins && res.status(200).json({ admins, totalNumberOfAdmin })
  } catch (error) {
    return res.status(404).json({ errors: error.message })
  }
})

exports.canDeleteAdmin = (req, res, next) => {
  const slug = req.params.slug.toLowerCase()
  User.findOne({ slug }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }

    if (user.userGroup.toString() === req.user.userGroup.toString()) {
      return res.status(401).json({message: "Admin cannot delete him or herself."})
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

exports.canUpdateAdmin = (req, res, next) => {
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
