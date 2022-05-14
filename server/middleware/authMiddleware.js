const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

exports.requireSignIn = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get the token from the headers
      token = req.headers.authorization.split(" ")[1]
      //verify the token
      const accessToken = jwt.verify(token, process.env.JWT_SECRET)

      //get user information from verified access token
      // console.log("accessToken", accessToken)
      const accessTokenId = accessToken.userId
      req.user = await User.findById(accessTokenId)

      next()
    } catch (error) {
      console.log(
        `Error getting user information. Access denied: ${error.message}`
      )
      res.status(401)
      throw new Error("Access Denied")
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("Access Denied. Please login to continue")
  }
})

exports.authMiddleware = async (req, res, next) => {
  //console.log("authMiddleware", req.user)
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
