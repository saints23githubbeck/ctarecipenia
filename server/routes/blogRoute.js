const express = require("express")
const {
  getBlogs,
  getBlogById,
  deleteBlogById,
  updateBlog,
  createBlog,
} = require("../controllers/blogController")
const router = express.Router()

router.post("/blog/create", createBlog)
router.get("/blogs", getBlogs)
router.get("/blogs/:blogId", getBlogById)
router.delete("/blogs/:blogId", deleteBlogById)
router.put("/blogs/:blogId", updateBlog)

module.exports = router
