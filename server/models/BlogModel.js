const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    permLink: {
      type: String,
    },
    prepareTime: {
      type: String,
    },
    cookTime: {
      type: String,
    },
    shortDesc: {
      type: String,
    },
    description: {
      type: String,
      required: true,
      minLength: 40,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    image: {
      type: String,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
)

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog
