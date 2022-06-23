const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const { TokenExpiredError } = jwt

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" })
  }

  return res.status(401).json({ message: "Unauthorized! Sign in to continue" })
}

exports.requireSignIn = asyncHandler(async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]

      //verify the token
      jwt.verify(token, process.env.JWT_SECRET, async (err, verifiedToken) => {
        if (err) {
          return catchError(err, res)
        }

        const userId = verifiedToken.userId
        const user = await User.findById(userId)
        if (!user) {
          return res.status(401).json({ error: "Unauthorized. Sign in to continue" })
        }
        req.user = user

        next()
      })
    } catch (error) {
      console.log(`Error getting user information. Access denied: ${error.message}`)
      return res.status(401).json({ error: "Access Denied" })
    }
  }

  if (!token) {
    return res.status(401).json({ error: "Access Denied. Please login to continue" })
  }
})

exports.authMiddleware = async (req, res, next) => {
  //console.log("authMiddleware", req.user)
  if (!req.user) {
    return res.status(401).json({ error: "Please Sign in" })
  }
  const user = await User.findById(req.user._id).exec()

  if (!user) {
    return res.status(400).json({
      error: "User not found",
    })
  }

  if (user.userGroup === "subscriber") {
    req.user = user
    next()
  } else {
    return res.status(400).json({
      error: "Access denied. Subscribers Only. Contact your administrator",
    })
  }
}

exports.adminMiddleware = async (req, res, next) => {
  const userId = req.user._id
  const user = await User.findById({ _id: userId }).exec()
  if (!user) {
    return res.status(400).json({
      error: "User not found",
    })
  }

  if (user.userGroup !== "admin") {
    return res.status(400).json({
      error: "Admin access only. Access denied",
    })
  }

  req.user = user
  next()
}
