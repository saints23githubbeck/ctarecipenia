const express = require("express")
const { updateBlog, createBlog, getBlogBySlug, deleteBlogBySlug, searchBlog, fetchBlogByUser, canDeleteBlog, canUpdateBlog, fetchAllBlogs } = require("../controllers/blogController")
const { requireSignIn, adminMiddleware, authMiddleware } = require("../middleware/authMiddleware")
const router = express.Router()

/** Public routes   */
router.get("/blogs", fetchAllBlogs)
router.get("/blog/:slug", getBlogBySlug)
router.get("/:username/blogs", fetchBlogByUser)

/** admin only route */
router.delete("admin/blog/:slug", requireSignIn, adminMiddleware, deleteBlogBySlug)

/** user only routes */
router.post("/blog", requireSignIn, authMiddleware, createBlog)
router.put("/blog/:slug", requireSignIn, authMiddleware, canUpdateBlog, updateBlog)
router.delete("/blog/:slug", requireSignIn, authMiddleware, canDeleteBlog, deleteBlogBySlug)

module.exports = router
