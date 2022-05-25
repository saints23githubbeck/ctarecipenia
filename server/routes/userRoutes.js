const express = require("express")
const {
  profileUpdate,
  searchUser,
  deleteUser,
  getMyProfile,
  fetchSubscribers,
  canUpdateUser,
  canDeleteUser,
  getUserBySlug,
} = require("../controllers/userController")
const {
  requireSignIn,
  authMiddleware,
} = require("../middleware/authMiddleware")
const router = express.Router()

router.get("/me", requireSignIn, authMiddleware, getMyProfile)
router.get("/subscribers", fetchSubscribers)
router.get("/user/:slug", getUserBySlug)
router.get("/search-user/search", searchUser)
router.put(
  "/profile-update",
  requireSignIn,
  authMiddleware,
  canUpdateUser,
  profileUpdate
)
router.delete(
  "/user/:slug",
  requireSignIn,
  authMiddleware,
  canDeleteUser,
  deleteUser
)

module.exports = router
