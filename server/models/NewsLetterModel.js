const mongoose = require("mongoose")
const Schema = mongoose.Schema

const newsSchema = new Schema({
  email: [
    {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Invalid email address"],
    },
  ],
})
const NewsLetters = mongoose.model("NewsModel", newsSchema)
module.exports = NewsLetters
