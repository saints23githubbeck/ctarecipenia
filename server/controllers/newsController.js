const NewsLetters = require("../models/newsLetterModel")

exports.subscribe = async (req, res) => {
  console.log(req.body.email)
  // save email
  const subscribe = NewsLetters({
    email: req.body.email,
  })

  await subscribe.save()
  res.status(200).json({
    success: true,
    message: `Thank you for subscribing! ${req.body.email}`,
  })
}

exports.fetchSubscribers = async (req, res) => {
  NewsLetters.find({}).exec((err, subscribers) => {
    if (err) throw err
    res.status(201).json(subscribers)
  })
}
