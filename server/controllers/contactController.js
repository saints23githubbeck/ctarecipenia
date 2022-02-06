const Contact = require("../models/contactModel")

exports.addContacts = async (req, res) => {
  console.log(req.body)
  try {
    const contact = new Contact({
      fullName: req.body.fname,
      message: req.body.message,
      email: req.body.email,
    })
    await contact.save()
    res
      .status(200)
      .json({
        contact,
        message: "Thank you for contacting us. We will contact you soon",
      })
  } catch (error) {}
}

exports.getContacts = async (req, res) => {
  Contact.find({}).exec((err, contacts) => {
   if (err) throw err
    res.status(201).json(contacts)
  })
}
