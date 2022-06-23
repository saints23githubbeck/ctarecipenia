const express = require("express")
const { addPage, updatePage, deletePage, getAll } = require("../controllers/pagesController")
const { requireSignIn, adminMiddleware } = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/admin/page/add", requireSignIn, adminMiddleware, addPage)
router.get("/pages", getAll)
router.put("/admin/page/:slug", requireSignIn, adminMiddleware, updatePage)
router.delete("/admin/page/:slug", requireSignIn, adminMiddleware, deletePage)

module.exports = router
