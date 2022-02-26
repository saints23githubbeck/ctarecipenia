const express = require("express")
const {
  register,
  login,
  forgotPassword,
  profileUpdate,
  searchUser,
  deleteUser,
  getAdminProfile,
  getUsersByAdmin,
  getUserByIdByAdmin,
  getMyProfile,
  fetchSubscribers,
} = require("../controllers/userController")
const {
  requireSignIn,
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/password-reset", forgotPassword)
router.get("/me", requireSignIn, authMiddleware, getMyProfile)
router.get("/all-users", fetchSubscribers)

router.put("/profile-update", requireSignIn, authMiddleware, profileUpdate)
router.get("/search-user/:query", searchUser)
router.delete("/remove-user", requireSignIn, deleteUser)

//admin routes
router.get("/users", requireSignIn, adminMiddleware, getUsersByAdmin)
router.get("/admin", requireSignIn, adminMiddleware, getAdminProfile)
router.get("/user", requireSignIn, adminMiddleware, getUserByIdByAdmin)

module.exports = router
