const express = require("express")
const { addContacts, getContacts } = require("../controllers/contactController")
const router = express.Router()

router.post("/contact-us", addContacts)
router.get("/contacts", getContacts)

module.exports = router
