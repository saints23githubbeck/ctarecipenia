const express = require("express")
const {
  addRecipe,
  getRecipes,
  updateRecipe,
  getRecipeBySlug,
  deleteRecipeBySlug,
} = require("../controllers/recipeController")
const { requireSignIn } = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/add-recipe", requireSignIn,  addRecipe) //add a recipe
router.get("/recipe/:slug", getRecipeBySlug) // get recipe by ID
router.get("/recipes", getRecipes) //get all recipes
router.delete("/recipe/:slug",requireSignIn, deleteRecipeBySlug) //delete a recipe
router.put("/recipe/:slug", updateRecipe) //update a recipe

module.exports = router
