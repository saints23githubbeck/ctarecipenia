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
  canDeleteBlog,
  canUpdateBlog,
} = require("../controllers/blogController")
const { requireSignIn } = require("../middleware/authMiddleware")
const router = express.Router()

/** Public routes   */
router.post("/blogs/related", fetchRelatedBlogs)
router.get("/blogs", getBlogs)
router.get("/blog/:slug", getBlogBySlug)
router.get("/blogs/search", searchBlog)

/** admin only route */
router.post("/admin/blog/create", requireSignIn, adminMiddleware, createBlog)
router.put("/admin/blog/:slug", requireSignIn, adminMiddleware, updateBlog)
router.delete("admin/blog/:slug", requireSignIn, adminMiddleware, deleteBlogBySlug)

/** user only routes */
router.post("/user/blog/create", requireSignIn, authMiddleware, createBlog)
router.put(
  "/user/blogs/:slug",
  requireSignIn,
  authMiddleware,
  canUpdateBlog,
  updateBlog
)
router.delete(
  "/user/blogs/:slug",
  requireSignIn,
  authMiddleware,
  canDeleteBlog,
  deleteBlogBySlug
)
router.get("/:username/blogs", fetchBlogByUser)
module.exports = router
