const express = require("express")
const { register, login, getUserProfile } = require("../controllers/userController")
const { requireSignIn } = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/me",requireSignIn, getUserProfile)


module.exports = router
