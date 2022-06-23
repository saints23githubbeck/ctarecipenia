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
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },

    country: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      min: 6,
      required: [true, "Please enter your password"],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    secret: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    userGroup: {
      type: String,
      default: "subscriber", // or admin
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    status: {
      type: String,
      default: "active", //or inactive
    },
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)
module.exports = User
