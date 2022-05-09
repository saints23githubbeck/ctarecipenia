const express = require("express")
const cors = require("cors")
const fs = require("fs")
const morgan = require("morgan")
const recipeDb = require("./config/db")
const cookieParser = require("cookie-parser")
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const xssClean = require("xss-clean")
const hpp = require("hpp")
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


app.use(helmet())
app.use(cookieParser())
app.use(mongoSanitize())
app.use(xssClean())
app.use(hpp({ whitelist: ["positions"] }))


const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 Mints
  max: 100,
})

app.use(limiter)

app.get("/api-test", (req, res) => res.send("Hello World!"))

fs.readdirSync("./routes").map((route) =>
  app.use("/", require("./routes/" + route))
)

const port = process.env.PORT || 8080

app.listen(port, () =>
  console.log(`app listening on port ${port}! http://localhost:${port}`)
)
