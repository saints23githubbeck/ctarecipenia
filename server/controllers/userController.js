const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body

  if (!username || !password || !email) {
    res.status(400)
    throw new Error("Please fill all required fields")
  }

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error("User with that email already exists")
  }

  const salt = await bcrypt.genSalt(12)
  const hashPassword = await bcrypt.hash(password, salt)

  const user = await User.create({ email, username, password: hashPassword })

  const userToken = createToken(user._id, email)

  //res.cookie("userTOKEN", userToken)

  if (user) {
    user.password = undefined
    res.status(201).json({
      user,
      success: true,
      token: userToken,
    })
  } else {
    res.status(400)
    throw new Error("Registration failed. Please try again later")
  }
})

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  const match = await bcrypt.compare(password, user.password)
    const userToken = createToken(user._id, email)

  if (match) {
    user.password = undefined
    res.status(200).json({
      message: "welcome back",
      user,
      token: userToken,
    })
  } else {
    res.status(401)
    throw new Error("Invalid user credentials")
  }
})



exports.getUserProfile =asyncHandler(async (req, res) => {
  res.status(200).json(res.user)
})

const createToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  })
}
