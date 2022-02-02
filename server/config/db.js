const mongoose = require("mongoose")

const recipeDb = async () => {
  try {
    const database = await mongoose.connect(process.env.CONNECTIONSTRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB connected to: ${database.connection.host}`)
    console.log("Let's Geauxxx")
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = recipeDb
