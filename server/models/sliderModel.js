const mongoose = require("mongoose")
const Schema = mongoose.Schema

const sliderSchema = new Schema(
  {
    recipe: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
)
const Slider = mongoose.model("Slider", sliderSchema)

module.exports = Slider
