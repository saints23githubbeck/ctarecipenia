const express = require("express")
const { getUsersByAdmin, getAdminProfile, getUserBySlugByAdmin, registerAdmin, registerUserByAdmin, deleteUserByAdmin, fetchAdmins, updateAdmin, canUpdateAdmin, canDeleteAdmin } = require("../controllers/adminController")
const { deleteUser, profileUpdate } = require("../controllers/userController")
const { requireSignIn, adminMiddleware } = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/admin/add-admin", requireSignIn, adminMiddleware, registerAdmin)
router.post("/admin/add-user", requireSignIn, adminMiddleware, registerUserByAdmin)
router.get("/admin/users", requireSignIn, adminMiddleware, getUsersByAdmin)
router.get("/admin/me", requireSignIn, adminMiddleware, getAdminProfile)
router.get("/admin/user/:slug", requireSignIn, adminMiddleware, getUserBySlugByAdmin)
router.get("/admins", requireSignIn, adminMiddleware, fetchAdmins)
router.put("/admin/update", requireSignIn, adminMiddleware, canUpdateAdmin, updateAdmin)
router.put("/admin/profile/update", requireSignIn, adminMiddleware, profileUpdate) //admin update user
router.delete("/admin/:slug", requireSignIn, adminMiddleware, canDeleteAdmin, deleteUserByAdmin)
router.delete("/user/:username", requireSignIn, adminMiddleware, deleteUser) //admin delete user from database

module.exports = router

//
