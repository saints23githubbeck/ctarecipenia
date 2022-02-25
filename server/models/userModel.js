const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Please enter a valid email"],
    },
    isAdmin: {
      type: String,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
)
const User = mongoose.model("User", userSchema)
module.exports = User