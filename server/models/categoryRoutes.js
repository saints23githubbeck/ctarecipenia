const express = require("express")
const {
  createCategory,
  getAll,
  removeCategory,
} = require("../controllers/categoryController")
const {
  requireSignIn,
  adminMiddleware,
} = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/category", requireSignIn, adminMiddleware, createCategory) //create category
router.get("/categories", getAll) // fetch all categories
router.get("/category/:slug", getBySlug) // fetch a category by slug
router.delete("/category/:slug", requireSignIn, adminMiddleware, removeCategory) // delete a category by slug

module.exports = router