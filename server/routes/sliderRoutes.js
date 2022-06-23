const express = require("express")
const { addSlider, fetchSliders, updateSlider, deleteSlide } = require("../controllers/sliderController")
const { requireSignIn, adminMiddleware } = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/admin/slider/add", requireSignIn, adminMiddleware, addSlider)
router.get("/sliders", fetchSliders)
router.put("/slider/:slug", requireSignIn, adminMiddleware, updateSlider)
router.delete("/admin/slider/:slug", requireSignIn, adminMiddleware, deleteSlide)

module.exports = router
