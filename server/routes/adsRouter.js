const express = require("express")
const {
  addAds,
  getAdsById,
  updateAds,
  deleteAds,
} = require("../controllers/adsController")
const router = express.Router()

router.post("/add-ads", addAds)
router.get("/about/:adsId", getAdsById)
router.put("/update/:adsId", updateAds)
router.delete("/:adsId", deleteAds)

module.exports = router
