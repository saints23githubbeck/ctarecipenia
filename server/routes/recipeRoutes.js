const express = require("express")
const { addRecipe, getRecipes, updateRecipe, getRecipeBySlug, deleteRecipe, searchRecipe, canUpdateRecipe, canDeleteRecipe, fetchRecipeByUser } = require("../controllers/recipeController")
const { requireSignIn, authMiddleware, adminMiddleware } = require("../middleware/authMiddleware")
const router = express.Router()

/** Public routes   */
router.get("/recipes", getRecipes)
router.get("/recipe/:slug", getRecipeBySlug)
router.get("/recipes/search", searchRecipe)
router.get("/:username/recipes", fetchRecipeByUser)

/** admin only route */
router.delete("/admin/recipe/:slug", requireSignIn, adminMiddleware, deleteRecipe)

// user routes
router.post("/recipe", requireSignIn, authMiddleware, addRecipe)
router.put("/recipe/:slug", requireSignIn, authMiddleware, canUpdateRecipe, updateRecipe)
router.delete("/recipe/:slug", requireSignIn, authMiddleware, canDeleteRecipe, deleteRecipe)

module.exports = router
