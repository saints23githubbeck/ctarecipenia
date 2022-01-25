const express = require("express")
const {
  addRecipe,
  getRecipeById,
  getRecipes,
  deleteRecipeById,
  updateRecipe,
} = require("../controllers/recipeController")
const router = express.Router()

router.post("/add-recipe", addRecipe) //add a recipe
router.get("/recipe/:recipeId", getRecipeById) // get recipe by ID
router.get("/recipes", getRecipes) //get all recipes
router.delete("/recipe/:recipeId", deleteRecipeById) //delete a recipe
router.put("/recipe/:recipeId", updateRecipe) //update a recipe

module.exports = router
