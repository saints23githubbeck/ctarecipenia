const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    image: {
      type: String,
      default: "",
    },
    code: {
      type: String,
      default: "",
    },
  },
})
const Ads = mongoose.model("AdsModel", adsSchema)
module.exports = Ads
