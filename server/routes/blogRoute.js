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
const { requireSignIn, adminMiddleware, authMiddleware } = require("../middleware/authMiddleware")
const router = express.Router()

/** Public routes   */
router.get("/blogs", getBlogs)
router.get("/blog/:slug", getBlogBySlug)
router.get("/blogs/search", searchBlog)
router.get("/:username/blogs", fetchBlogByUser)

/** admin only route */
router.post("/admin/blog", requireSignIn, adminMiddleware, createBlog)
router.put("/admin/blog/:slug", requireSignIn, adminMiddleware, updateBlog)
router.delete( "admin/blog/:slug", requireSignIn,adminMiddleware,deleteBlogBySlug)

/** user only routes */
router.post("/user/blog", requireSignIn, authMiddleware, createBlog)
router.put( "/user/blog/:slug",requireSignIn,authMiddleware,canUpdateBlog, updateBlog)
router.delete("/user/blog/:slug",requireSignIn,authMiddleware,canDeleteBlog,deleteBlogBySlug)


module.exports = router
