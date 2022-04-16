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
  updateUserByAdmin,
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
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjViMThiNmMyOGU0OGU1YzFhMGM1NjEiLCJlbWFpbCI6Im5ld3BlcnNvbkBtYWlsLm1lIiwiaWF0IjoxNjUwMTM3MzkzLCJleHAiOjE2NTI3MjkzOTN9.dROBgbRRqkYJvSweE1T-vDDR68azuJQ0RkkSFWTM1S0
router.put("/profile-update", requireSignIn, authMiddleware, profileUpdate)
router.get("/search-user/:query", searchUser)
router.delete("/remove-user", requireSignIn, deleteUser)


//admin routes
router.get("/users", requireSignIn, adminMiddleware, getUsersByAdmin)
router.get("/admin", requireSignIn, adminMiddleware, getAdminProfile)
router.get("/user", requireSignIn, adminMiddleware, getUserByIdByAdmin)
router.get("/update-user", requireSignIn, adminMiddleware, updateUserByAdmin)

module.exports = router
