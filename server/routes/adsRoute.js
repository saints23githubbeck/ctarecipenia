const express = require("express")
const { addAds, fetchAllAds, updateAds, deleteAds } = require("../controllers/adsController")
const { requireSignIn, adminMiddleware } = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/ads/add", requireSignIn, adminMiddleware, addAds)
router.get("/ads", fetchAllAds)
router.put("/ads/:slug", requireSignIn, adminMiddleware, updateAds)
router.delete("/ads/:slug", requireSignIn, adminMiddleware, deleteAds)

module.exports = router
