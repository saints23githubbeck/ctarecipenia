const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pagesModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  permalink: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  slug: { type: String, unique: true, index: true },
})

const Page = mongoose.model("Page", pagesModel)

module.exports = Page
