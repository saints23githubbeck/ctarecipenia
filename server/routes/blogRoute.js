const express = require("express")
const {
  getBlogs,
  updateBlog,
  createBlog,
  getBlogBySlug,
  deleteBlogBySlug,
} = require("../controllers/blogController")
const { requireSignIn } = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/blog/create", requireSignIn, createBlog)
router.get("/blogs", getBlogs)
router.get("/blogs/:slug", getBlogBySlug)
router.delete("/blogs/:slug", requireSignIn, deleteBlogBySlug)
router.put("/blogs/:slug", requireSignIn, updateBlog)

module.exports = router
