const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
      unique: true,
      lowercase: true,
      trim: true,
      min: 4,
      match: [/^[a-zA-Z0-9._]+$/, "username contains invalid characters"],
    },
    name: {
      type: String,
    },
    password: {
      type: String,
      min: 6,
      required: [true, "Please enter a password"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Invalid email address"],
    },
    secret: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: "subscriber",
    },
  },
  { timestamps: true }
)
const User = mongoose.model("User", userSchema)
module.exports = User
