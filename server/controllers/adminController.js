const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

exports.registerAdmin = asyncHandler(async (req, res) => {
  const {
    username,
    firstName,
    lastName,
    country,
    userGroup,
    image,
    description,
    password,
    email,
    secret,
  } = req.body

  if (
    !username ||
    !password ||
    !email ||
    !secret ||
    !firstName ||
    !lastName ||
    !country ||
    !image ||
    !description ||
    !userGroup
  ) {
    res.status(400).json({ error: "Please fill all required fields" })
  }

  if (password && password.length < 6) {
    return res.json({
      error: "Password should be 6 or more characters long",
    })
  }

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400).json({ error: "User already exists" })
  }

  const salt = await bcrypt.genSalt(12)
  const hashPassword = await bcrypt.hash(password, salt)
  const hashedSecret = await bcrypt.hash(secret, salt)

  const user = new User()
  user.userGroup = userGroup
  user.username = username
  user.firstName = firstName
  user.lastName = lastName
  user.email = email
  user.country = country
  user.description = description
  user.password = hashPassword
  user.secret = hashedSecret
  user.image = image
  user.slug = slugify(username).toLowerCase()

  user.save()

  if (user) {
    user.password = undefined
    user.secret = undefined
    res.status(201).json({
      message: "Signup success! Please login.",
      success: true,
    })
  } else {
    res
      .status(400)
      .json({ message: "Registration failed. Please try again later" })
  }
})

exports.registerUserByAdmin = asyncHandler(async (req, res) => {
  const {
    username,
    firstName,
    lastName,
    country,
    userGroup,
    image,
    description,
    password,
    email,
    secret,
  } = req.body
  if (
    !username ||
    !password ||
    !email ||
    !secret ||
    !firstName ||
    !lastName ||
    !country ||
    !image ||
    !description ||
    !userGroup
  ) {
    res.status(400).json({ error: "Please fill all required fields" })
  }

  if (password && password.length < 6) {
    return res.json({
      error: "Password should be 6 or more characters long",
    })
  }

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400).json({ error: "User already exists" })
  }

  const salt = await bcrypt.genSalt(12)
  const hashPassword = await bcrypt.hash(password, salt)
  const hashedSecret = await bcrypt.hash(secret, salt)

  const user = new User()
  user.userGroup = userGroup || user.userGroup
  user.username = username
  user.firstName = firstName || user.firstName
  user.lastName = lastName || user.lastName
  user.email = email
  user.country = country || user.country
  user.description = description || user.description
  user.password = hashPassword
  user.secret = hashedSecret
  user.image = image || user.image
  user.slug = slugify(username).toLowerCase()

  user.save()

  if (user) {
    user.password = undefined
    user.secret = undefined
    res.status(201).json({
      message: "Signup success! Please login.",
      success: true,
      user,
    })
  } else {
    res
      .status(400)
      .json({ message: "Registration failed. Please try again later" })
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
    res.status(404).json({ errors: error.message })
  }
})

exports.getUserBySlugByAdmin = asyncHandler(async (req, res) => {
  try {
    const slug = req.params.slug.toLowerCase()
    const user = await User.findOne(slug).select("-password -secret")
    user && res.json({ user })
  } catch (error) {
    res.status(404)
    throw new Error("User not found")
  }
})

exports.getAdminProfile = asyncHandler(async (req, res) => {
  const user = req.user
  if (!user) return res.status(404).json({ error: "User not found" })

  res.status(200).json({ user })
})

exports.updateUserByAdmin = asyncHandler(async (req, res) => {
  const {
    username,
    firstName,
    lastName,
    country,
    userGroup,
    image,
    description,
    email,
    status,
  } = req.body
  try {
    const userId = req.user._id
    const user = await User.findById({ _id: userId }).select(
      "-password -secret"
    )

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

      res.status(200).json({
        message: "User info updated",
        updatedUser,
      })
    } else {
      res.status(404).json({ error: "User not found" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

exports.deleteUserByAdmin = asyncHandler(async (req, res) => {
  const slug = req.params.slug.toLowerCase()
  try {
    const user = await User.findOneAndDelete(slug)

    res.json({
      message: `Your account has been deleted. Goodbye! ${user.name}. Sorry to see you go. `,
    })
  } catch (err) {
    console.log(err)
  }
})

exports.fetchAdmins = asyncHandler(async (req, res) => {
  try {
    const admins = await User.find({ userGroup: "admin" }).select(
      "-password -secret"
    )
    const totalNumberOfAdmin = admins.length
    admins && res.status(200).json({ admins, totalNumberOfAdmin })
  } catch (error) {
    res.status(404).json({ errors: error.message })
  }
})
