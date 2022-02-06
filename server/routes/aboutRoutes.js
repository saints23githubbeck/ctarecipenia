const express = require("express")
const {
  addAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
} = require("../controllers/aboutController")
const router = express.Router()

router.post("/add-about", addAbout)
router.get("/about/:aboutId", getAboutById)
router.put("/update/:aboutId", updateAbout)
router.delete("/:aboutId", deleteAbout)

module.exports = router
