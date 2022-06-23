const express = require("express")
const { updateBlog, createBlog, getBlogBySlug, deleteBlogBySlug, searchBlog, fetchBlogByUser, canDeleteBlog, canUpdateBlog, fetchAllBlogs } = require("../controllers/blogController")
const { requireSignIn, adminMiddleware, authMiddleware } = require("../middleware/authMiddleware")
const router = express.Router()

/** Public routes   */
router.get("/blogs", fetchAllBlogs)
router.get("/blog/:slug", getBlogBySlug)
router.get("/:slug/blogs", fetchBlogByUser)

/** admin only route */
router.delete("/admin/blog/:slug", requireSignIn, adminMiddleware, deleteBlogBySlug)
router.post("/admin/blog", requireSignIn, adminMiddleware, createBlog)
router.put("/admin/blog/:slug", requireSignIn, adminMiddleware, canUpdateBlog, updateBlog)

/** user only routes */
router.post("/user/blog", requireSignIn, authMiddleware, createBlog)
router.put("/user/blog/:slug", requireSignIn, authMiddleware, canUpdateBlog, updateBlog)
router.delete("/user/blog/:slug", requireSignIn, authMiddleware, canDeleteBlog, deleteBlogBySlug)

module.exports = router
