const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adsSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  code: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
    index: true,
  },
})

const Ads = mongoose.model("Ads", adsSchema)

module.exports = Ads
