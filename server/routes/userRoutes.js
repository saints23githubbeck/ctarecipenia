const express = require("express")
const { profileUpdate, getUserProfile, deleteUser, getMyProfile, fetchSubscribers, canDeleteUser, canUpdateUser } = require("../controllers/userController")
const { requireSignIn, authMiddleware } = require("../middleware/authMiddleware")
const router = express.Router()

router.get("/me", requireSignIn, authMiddleware, getMyProfile)
router.get("/subscribers", fetchSubscribers)
router.get("/user/:username", getUserProfile)
router.put("/profile/update", requireSignIn, authMiddleware, canUpdateUser, profileUpdate)
router.delete("/user/:username", requireSignIn, authMiddleware, canDeleteUser, deleteUser)

module.exports = router
