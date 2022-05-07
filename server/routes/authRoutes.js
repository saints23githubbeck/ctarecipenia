const express = require("express")
const {
  register,
  forgotPassword,
  login,
  logout,
} = require("../controllers/authController")

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/password-reset", forgotPassword)
router.get("/logout", logout)

module.exports = router
