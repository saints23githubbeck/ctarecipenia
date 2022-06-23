const express = require("express")
const { createCategory, getAll, getBySlug, removeCategory } = require("../controllers/categoryController")
const { requireSignIn, adminMiddleware } = require("../middleware/authMiddleware")

const router = express.Router()

//routes
router.post("/admin/category", requireSignIn, adminMiddleware, createCategory) //create category
router.get("/categories", getAll) // fetch all categories
router.get("/admin/category/:slug", getBySlug) // fetch a category by slug
router.delete("/admin/category/:slug", requireSignIn, adminMiddleware, removeCategory) // delete a category by slug

module.exports = router
