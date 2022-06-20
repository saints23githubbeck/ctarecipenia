const Newsletter = require("../models/NewsLetter")

exports.fetchAllSubscribers = async (req, res) => {
  Newsletter.find({}).exec((err, subs) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      })
    }
    return res.json(subs)
  })
}

exports.deleteNewsLetter = async (req, res) => {
  const subsId = req.params.id

  Newsletter.findOneAndDelete({ subsId }).exec((err, subs) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    return res.json({
      message: "Su deleted.",
    })
  })
}
