const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = asyncHandler(async (req, res) => {
  const { username, password, email, secret, profilePic } =
    req.body
  if (!username || !password || !email || !secret) {
    res.status(400)
    throw new Error("Please fill all required fields")
  }

  if (password && password.length < 6) {
    return res.json({
      error: "Password should be 6 or more characters long",
    })
  }

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error("User with that email already exists")
  }

  const salt = await bcrypt.genSalt(12)
  const hashPassword = await bcrypt.hash(password, salt)
  const hashedSecret = await bcrypt.hash(secret, salt)

  const user = await User.create({
    email,
    username,
    password: hashPassword,
    secret: hashedSecret,
    profilePic,
  })

  const userToken = createToken(user._id, email)

  if (user) {
    user.password = undefined
    user.secret = undefined
    res.status(201).json({
      message: "Signup success! Please login.",
      success: true,
      user,
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

  if (match) {
    const userToken = createToken(user._id, email)
    user.password = undefined
    user.secret = undefined
    res.status(200).json({
      message: `Welcome back ${user.username}`,
      user,
      token: userToken,
    })
  } else {
    res.status(401)
    throw new Error("Invalid user credentials")
  }
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
      await User.findByIdAndUpdate(user._id, { password: hashPassword })
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

exports.profileUpdate = asyncHandler(async (req, res) => {
  console.log(res.user)
  try {
    //console.log("profile update req.body", req.body);
    const { secret, password, username, profilePic } =
      req.body
    const updateInfo = {}

    if (username) {
      updateInfo.username = username
    }

    if (firstName && lastName) {
      updateInfo.name = `${req.body.firstName} ${req.body.lastName}`
    }

    if (password) {
      if (password.length < 6) {
        return res.json({
          error: "Password is required and should be min 6 characters long",
        })
      } else {
        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)
        updateInfo.password = hashedPassword
      }
    }
    if (secret) {
      const salt = await bcrypt.genSalt(12)
      const hashedSecret = await bcrypt.hash(secret, salt)
      updateInfo.secret = hashedSecret
    }

    if (profilePic) {
      updateInfo.profilePic = profilePic
    }
    let user = await User.findByIdAndUpdate(res.user._id, updateInfo, {
      new: true,
    })

    // console.log('updated user', user)
    user.password = undefined
    user.secret = undefined
    res.json({ message: "Profile has been updated", updateInfo })
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ error: " Username already taken" })
    }
    return res.status(500).json(err)
  }
})

exports.deleteUser = asyncHandler(async (req, res) => {
  const userId = res.user._id
  try {
    const user = await User.findByIdAndDelete(userId)

    res.json({
      message: `Your account has been deleted. Goodbye! ${user.name}`,
    })
  } catch (err) {
    console.log(err)
  }
})

exports.getMyProfile = asyncHandler(async (req, res) => {
  const user = res.user
  res.status(200).json({ user })
})

exports.getAdminProfile = asyncHandler(async (req, res) => {
  res.status(200).json(res.user)
})

exports.searchUser = asyncHandler(async (req, res) => {
  const { query } = req.params
  if (!query) return
  try {
    const user = await User.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { username: { $regex: query, $options: "i" } },
      ],
    }).select("-password -secret")
    res.json(user)
  } catch (err) {
    console.log(err)
  }
})

exports.getUsersByAdmin = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({})
    users && res.status(201).json({ users })
  } catch (error) {
    res.status(404).json({ errors: error.message })
  }
})

exports.fetchSubscribers = asyncHandler(async (req, res) => {
  try {
    const subscribers = await User.find({ status: "subscriber" }).select(
      "-password -secret"
    )
    subscribers && res.status(201).json({ subscribers })
  } catch (error) {
    res.status(404).json({ errors: error.message })
  }
})

exports.getUserByIdByAdmin = asyncHandler(async (req, res) => {
  try {
    const userId = res.user._id
    const user = await User.findById({ _id: userId }).select(
      "-password -secret"
    )
    user && res.json({ user })
  } catch (error) {
    res.status(404)
    throw new Error("User not found")
  }
})

exports.updateUserByAdmin = asyncHandler(async (req, res) => {
  const { email, username, status } = req.body
  try {
    const userId = res.user._id
    const user = await User.findById({ _id: userId }).select(
      "-password -secret"
    )

    if (user) {
      user.username = username || user.username
      user.email = email || user.email
      user.status = status || user.status

      const updatedUser = await user.save()

      updatedUser.password = undefined
      updatedUser.secret = undefined

      res.json({
        updatedUser,
      })
    } else {
      res.status(404)
      throw new Error("User not found")
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//middleware
const createToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  })
}
