const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter recipe name"],
      trim: true,
      unique: true,
      minLength: 5,
      maxLength: [50, "Recipe name cannot exceed 100 characters"],
      match: [
        /^[a-zA-Z ]*$/,
        "Please enter a name. Special characters are  not allowed",
      ],
    },
    category: {
      type: String,
      required: [true, "Please enter recipe category"],
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    videoLink: {
      type: String,
    },
    direction: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
    featuredImage: {
      type: String,
    },
    permlink: {
      type: String,
    },
    difficulty: {
      type: String,
    },
    prepareTime: {
      type: String,
    },
    serves: {
      type: String,
    },
    calories: {
      type: String,
    },
    tags: [],
    facts: {
      type: String,
    },
    additionalInfo: {
      type: String,
    },
    ingredients: [],
  },
  { timestamps: new Date().getTime }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
