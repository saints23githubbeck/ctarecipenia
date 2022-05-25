const express = require("express")
const {
  getUsersByAdmin,
  getAdminProfile,
  getUserBySlugByAdmin,
  registerAdmin,
  registerUserByAdmin,
  deleteUserByAdmin,
  fetchAdmins,
  updateAdmin,
} = require("../controllers/adminController")
const {
  requireSignIn,
  adminMiddleware,
} = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/admin/add-admin", requireSignIn, adminMiddleware, registerAdmin)
router.post(
  "/admin/add-user",
  requireSignIn,
  adminMiddleware,
  registerUserByAdmin
)
router.get("/admin/users", requireSignIn, adminMiddleware, getUsersByAdmin)
router.get("/admin/user", requireSignIn, adminMiddleware, getAdminProfile)
router.get(
  "/admin/user/:slug",
  requireSignIn,
  adminMiddleware,
  getUserBySlugByAdmin
)
router.get("/admins", requireSignIn, adminMiddleware, fetchAdmins)
router.put("/admin/update", requireSignIn, adminMiddleware, updateAdmin)
router.delete("/admin/:slug", requireSignIn, adminMiddleware, deleteUserByAdmin)

module.exports = router

//
