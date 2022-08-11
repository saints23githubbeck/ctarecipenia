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
  const slug = req.params.slug.toLowerCase()

  try {
    const user = await User.findOne({ slug }).select("-password -secret")
    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }
    return res.json({ user })
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
  const user = await User.findOne({ slug: req.params.slug.toLowerCase() })

  try {
    //console.log("profile update req.body", req.body)
    const { password, email, userGroup, secret, username, image, country, description, lastName, firstName, status } = req.body
    const updateInfo = {}

    if (username) {
      // Check for duplicate
      const duplicate = await User.findOne({ username }).lean().exec()

      // Allow updates to the original user
      if (duplicate && duplicate?._id.toString() !== user.id) {
        return res.status(409).json({ message: "Duplicate username" })
      }
      updateInfo.username = username
      const slug = slugify(username).toLowerCase() 
      updateInfo.slug = slug
    }

    if (email) {
      updateInfo.email = email
    }

    if (userGroup) {
      updateInfo.userGroup = userGroup
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

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { $set: updateInfo },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    )

    return res.status(200).json({ message: "Profile has been updated" })
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ error: " Username already taken" })
    }
    return res.status(500).json({ err })
  }
})

exports.deleteAdminByAdmin = asyncHandler(async (req, res) => {
  const slug = req.params.slug

  try {
    const user = await User.findOne({ slug })
    //console.log(user)

    if (user._id === req.user._id) {
      return res.status(401).json({ message: "Admin cannot delete him or herself." })
    }
    user.remove()
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
