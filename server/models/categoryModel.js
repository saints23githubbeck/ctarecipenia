const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    icon: { type: String, required: true },
    permalink: {
      type: String,
    },
  },
  { timestamps: true }
)

const Category = mongoose.model("Category", categorySchema)
module.exports = Category
