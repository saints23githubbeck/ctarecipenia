const mongoose = require("mongoose")
const Schema = mongoose.Schema

const aboutUsSchema = new Schema({
  userId: {
    type: String,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
      default: "",
    },
  ],
  tags: {
    type: String,
    required: true,
  },
})

const About = mongoose.model("About", aboutUsSchema)

module.exports = About
