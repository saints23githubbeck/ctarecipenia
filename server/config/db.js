const mongoose = require("mongoose")
const colors = require("colors")
const recipeDb = async () => {
  try {
    const database = await  mongoose.connect(process.env.CONNECTIONSTRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB connected to recipe database ${database.connection.host}`.rainbow)

  } catch (error) {
    console.error(`Error: ${error.message}`.cyan)
    process.exit(1)
  }
}

module.exports = recipeDb
