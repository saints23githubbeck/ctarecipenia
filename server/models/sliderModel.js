const mongoose = require("mongoose")
const Schema = mongoose.Schema

const sliderSchema = new Schema(
  {
    recipe: {
      type: String,
      required: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)
const Slider = mongoose.model("Slider", sliderSchema)

module.exports = Slider
