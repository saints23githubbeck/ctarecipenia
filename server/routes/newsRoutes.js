const express = require("express")
const { subscribe, fetchSubscribers } = require("../controllers/newsController")
const router = express.Router()

router.post("/subscribe", subscribe)
router.get("/subscribers", fetchSubscribers)

module.exports = router
