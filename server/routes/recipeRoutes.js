const express = require("express")
const {
  addRecipe,
  getRecipes,
  updateRecipe,
  getRecipeBySlug,
  deleteRecipe,
  searchRecipe,
  canUpdateRecipe,
  canDeleteRecipe,
  fetchRecipeByUser,
} = require("../controllers/recipeController")
const {
  requireSignIn,
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware")
const router = express.Router()




/** Public routes   */
router.get("/recipes", getRecipes)
router.get("/recipe/:slug", getRecipeBySlug)
router.get("/recipes/search", searchRecipe)


/** admin only route */
router.post("/admin/recipe", requireSignIn, adminMiddleware, addRecipe)
router.put("/admin/recipe/:slug", requireSignIn, adminMiddleware, updateRecipe)
router.delete("/admin/recipe/:slug", requireSignIn, adminMiddleware, deleteRecipe)


// user routes
router.post("/user/recipe", requireSignIn, authMiddleware, addRecipe)
router.get("/:username/recipes", fetchRecipeByUser)
router.put("/user/recipe/:slug", requireSignIn, authMiddleware, canUpdateRecipe, updateRecipe)
router.delete("/user/recipe/:slug", requireSignIn, authMiddleware, canDeleteRecipe, deleteRecipe)




module.exports = router
