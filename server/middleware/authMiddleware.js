const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const { TokenExpiredError } = jwt

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" })
  }

  return res.sendStatus(401).send({ message: "Unauthorized!" })
}

exports.requireSignIn = asyncHandler(async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      //get the token from the headers
      token = req.headers.authorization.split(" ")[1]

      //verify the token
      jwt.verify(token, process.env.JWT_SECRET, (err, verifiedToken) => {
        if (err) {
          return catchError(err, res)
        }
      //get user information from verified access token
      // console.log("verifiedToken", verifiedToken)
      const userId = verifiedToken.userId
      req.user = await User.findById(userId)

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

  if (user.userGroup !== "subscriber") {
    return res.status(400).json({
      error: "Subscribers access only. Access denied",
    })
  }

  req.user = user
  next()
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
