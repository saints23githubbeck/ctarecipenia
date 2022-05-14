const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const slugify = require("slugify")
const bcrypt = require("bcrypt")
const createToken = require("../utils/generateToken")

exports.register = asyncHandler(async (req, res) => {
  const { username, password, email, secret } = req.body
  if (!username || !password || !email || !secret) {
    res.status(400).json({ error: "Please fill all required fields" })
  }

  if (password && password.length < 6) {
    return res.json({
      error: "Password should be 6 or more characters long",
    })
  }

  const userExists = await User.findOne({ email })
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
    password: hashPassword,
    secret: hashedSecret,
  })

  if (user) {
    const userToken = createToken(user._id, email)
    user.password = undefined
    user.secret = undefined

    res.cookie("token", userToken, {
      expiresIn: "1d",
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    return res.status(201).json({
      message: "Signup success! Please login.",
      success: true,
      user,
      userToken,
    })
  } else {
    return res
      .status(400)
      .json({ message: "Registration failed. Please try again later" })
  }
})

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (!user) {
    return res
      .status(401)
      .json({ error: "This user does not exist. Please sign up " })
  }
  const match = await bcrypt.compare(password, user.password)

  if (match) {
    const userToken = createToken(user._id, email)

    res.cookie("token", userToken, { expiresIn: "1d" })
    user.password = undefined
    user.secret = undefined
    return res.status(200).json({
      message: `Welcome back ${user.username}`,
      user,
      token: userToken,
    })
  } else {
  return res.status(401).json({ error: "Invalid user credentials" })
  }
})

exports.logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("token")
  return res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  })
})

exports.forgotPassword = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const { email, newPassword, userSecret } = req.body

  if (!userSecret || !email) {
    return res.json({
      message: "Please fill all fields",
    })
  }
  // validation
  if (!newPassword || newPassword < 6) {
    return res.json({
      message: "Password is required and must be at least 6 characters",
    })
  }

  const user = await User.findOne({ email })
  !user && res.json({ message: "Invalid user credentials" })

  const match = await bcrypt.compare(userSecret, user.secret)

  if (match) {
    try {
      const salt = await bcrypt.genSalt(12)
      const hashPassword = await bcrypt.hash(newPassword, salt)
      await User.findOneAndUpdate(user._id, { password: hashPassword })
      return res.json({
        success: "Password changed, Now you can login with your new password",
      })
    } catch (err) {
      //console.log(err)
      return res.json({
        message: "Something wrong. Try again.",
      })
    }
  }
})
