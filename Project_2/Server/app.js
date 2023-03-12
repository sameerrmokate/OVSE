const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const app = express()

//Connect to database
require("./db")

//Importing router
const authRouter = require("./routes/auth")

app.use(helmet())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use("/auth", authRouter)

app.listen(8000, ()=>{
	console.log("Running at 8000")
})