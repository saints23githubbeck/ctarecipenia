const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSchema = new Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      minLength: 40,
      required: true,
    },
    image: {
      type: String,
    },
    tags: [],
  },
  { timestamps: true }
)

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog
