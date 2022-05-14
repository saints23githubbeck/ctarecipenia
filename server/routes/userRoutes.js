const express = require("express")
const {
  profileUpdate,
  searchUser,
  deleteUser,
  getMyProfile,
  fetchSubscribers,
} = require("../controllers/userController")
const {
  requireSignIn,
  authMiddleware,
} = require("../middleware/authMiddleware")
const router = express.Router()

router.get("/me", requireSignIn, authMiddleware, getMyProfile)
router.get("/subscribers", fetchSubscribers)
router.get("/search-user/search", searchUser)
router.put("/profile-update", requireSignIn, authMiddleware, profileUpdate)
router.delete("/remove-user", requireSignIn, authMiddleware, deleteUser)

module.exports = router
