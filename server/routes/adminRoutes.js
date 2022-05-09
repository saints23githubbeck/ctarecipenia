const express = require("express")
const {
  getUsersByAdmin,
  getAdminProfile,
  updateUserByAdmin,
  getUserBySlugByAdmin,
  registerAdmin,
  registerUserByAdmin,
  deleteUserByAdmin,
  fetchAdmins,
} = require("../controllers/adminController")
const {
  requireSignIn,
  adminMiddleware,
} = require("../middleware/authMiddleware")
const router = express.Router()

router.get("/admin/users", requireSignIn, adminMiddleware, getUsersByAdmin)
router.post("/admin/add-admin", requireSignIn, adminMiddleware, registerAdmin)
router.post("/admin/add-user", requireSignIn, adminMiddleware, registerUserByAdmin)
router.get("/admin/user", requireSignIn, adminMiddleware, getAdminProfile)
router.get(
  "/admin/user/:slug",
  requireSignIn,
  adminMiddleware,
  getUserBySlugByAdmin
)

router.get("/all-admins", requireSignIn, adminMiddleware, fetchAdmins)
router.put(
  "/admin/update-user",
  requireSignIn,
  adminMiddleware,
  updateUserByAdmin
)
router.delete("/admin/:slug", requireSignIn, adminMiddleware, deleteUserByAdmin)

module.exports = router
