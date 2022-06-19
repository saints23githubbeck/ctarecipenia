const express = require("express")
const { addPage, updatePage, deletePage, getAll } = require("../controllers/pagesController")
const { requireSignIn, adminMiddleware } = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/page/add", requireSignIn, adminMiddleware, addPage)
router.get("/pages", getAll)
router.put("/page/:slug", requireSignIn, adminMiddleware, updatePage)
router.delete("/page/:slug", requireSignIn, adminMiddleware, deletePage)

module.exports = router
