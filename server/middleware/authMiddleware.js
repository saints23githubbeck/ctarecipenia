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
      res.user = await User.findOne(accessToken._id).select("-password")
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
    throw new Error("Access Denied")
  }
})
