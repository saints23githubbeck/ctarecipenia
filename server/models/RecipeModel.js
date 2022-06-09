const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema

const Schema = mongoose.Schema

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter recipe name"],
      unique: true,
      minLength: 5,
      maxLength: [50, "Recipe name cannot exceed 100 characters"],
      match: [
        /^[a-zA-Z ]*$/,
        "Please enter a name. Special characters are  not allowed",
      ],
    },
    category: { type: String, required: true },
    cookTime: { type: String, required: true },
    calories: { type: String, required: true },
    description: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    direction: {
      type: String,
    },
    permLink: {
      type: String,
    },
    image: {
      type: String,
    },
    difficulty: {
      type: String,
    },
    prepareTime: {
      type: String,
    },
    serves: {
      type: Number,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe
