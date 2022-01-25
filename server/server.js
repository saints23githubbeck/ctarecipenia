const express = require("express")
const cors = require("cors")
const fs = require("fs")
const morgan = require("morgan")
const recipeDb = require("./config/db")
require("dotenv").config()
const app = express()

process.on("uncaughtException", (error) => {
  console.error(`Error: ${error.message}`)
  console.error("shutting down server due to uncaught exceptions")
  process.exit(1)
})

// connect to database
recipeDb()

//middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.get("/", (req, res) => res.send("Hello World!"))
// app.use("/", require("./routes/recipeRoutes"))

app.get("/", (req, res) => res.send("Hello World!"))
app.use("/", require("./routes/recipeRoutes")) 

fs.readdirSync("./routes").map((route) =>
  app.use("/", require("./routes/" + route))
)

const port = process.env.PORT || 5000

app.listen(port, () =>
  console.log(`app listening on port ${port}! http://localhost:${port}`)
)
