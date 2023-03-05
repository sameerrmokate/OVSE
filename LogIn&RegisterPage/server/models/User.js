const mongoose = require("mongoose")

var UserSchema = new mongoose.Schema({
	name : {type :String},
	email : {type : String},
	password : {type : String},
	gender : {type: String},
	phone : {type : String},
	pic : {type : String}
})

module.exports = mongoose.model("user", UserSchema)