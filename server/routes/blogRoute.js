const express = require("express")
const {
  getBlogs,
  updateBlog,
  createBlog,
  getBlogBySlug,
  deleteBlogBySlug,
  searchBlog,
  fetchRelatedBlogs,
  fetchBlogByUser,
} = require("../controllers/blogController")
const { requireSignIn } = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/user/blog/create", requireSignIn, createBlog)
router.post("/blogs/related", fetchRelatedBlogs)
router.get("/blogs", getBlogs)
router.get("/blogs/:slug", getBlogBySlug)
router.get("/:username/blogs", fetchBlogByUser)
router.delete("/user/blogs/:slug", requireSignIn, deleteBlogBySlug)
router.put("/user/blogs/:slug", requireSignIn, updateBlog)
router.get("/blogs/search", searchBlog)

module.exports = router
