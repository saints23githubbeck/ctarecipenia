const express = require("express")
const { fetchAllSubscribers, deleteNewsLetter } = require("../controllers/newsLetterController")
const { requireSignIn, adminMiddleware } = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/subs", fetchAllSubscribers)
router.delete("/subs/:id", requireSignIn, adminMiddleware, deleteNewsLetter)

module.exports = router
