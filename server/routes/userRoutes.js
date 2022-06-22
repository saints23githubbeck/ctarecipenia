const express = require("express")
const { profileUpdate, getUserProfile, deleteUser, getMyProfile, fetchSubscribers, canDeleteUser, canUpdateUser } = require("../controllers/userController")
const { requireSignIn, authMiddleware } = require("../middleware/authMiddleware")
const router = express.Router()

router.get("/me", requireSignIn, authMiddleware, getMyProfile)
router.get("/subscribers", fetchSubscribers)
router.get("/user/:username", getUserProfile)
router.put("/user/update", requireSignIn, authMiddleware, profileUpdate)
router.delete("/user/:slug", requireSignIn, authMiddleware, deleteUser)

module.exports = router
