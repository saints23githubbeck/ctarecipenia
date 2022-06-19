const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adsSchema = new Schema({
  location: {
    type: string,
    required: true,
  },
  title: {
    type: string,
  },
  image: {
    type: string,
  },
  code: {
    type: string,
  },
})

module.exports = Ads = mongoose.model("Ads", adsSchema)
