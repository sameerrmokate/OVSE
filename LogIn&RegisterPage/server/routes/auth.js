const express = require("express")
const router = express.Router()

//Importing controller
const authController = require("../controller/auth")

router.post("/register",authController.registerUser)
router.post("/login", authController.login)
router.post("/data", authController.getData)

module.exports = router