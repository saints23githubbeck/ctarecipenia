const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contactSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0]+$/, "Full name contains invalid characters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Invalid email address"],
  },
  message: {
    type: String,
    required: true,
    min: 50,
  },
})
const Contact = mongoose.model("Contact", contactSchema)
module.exports = Contact
