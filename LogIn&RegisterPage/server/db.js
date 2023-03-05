const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/project")
	.then(()=>{console.log("Database connected")})
	.catch(err =>{
		console.log("Failed to connect to database")
		console.log(err)
	})