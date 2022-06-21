const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema

const newsLetter = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
  },
  userId: {
    type: ObjectId,
    required: true,
  },
 
})

const Newsletter = mongoose.model("Newsletter", newsLetter)

module.exports = Newsletter
