const User = require("../models/User");
// const bcrypt = require("bcrypt");
const salt = 10;
const jwt = require("jsonwebtoken");
const SECRET = "123XYZ";

exports.registerUser = async (req, res) => {
	if (req.body.name && req.body.password && req.body.email) {
		var user = new User({
			name: req.body.name,
			email: req.body.email,
			password: await bcrypt.hash(req.body.password, salt), //Generating the hash
		});
		user.save()
			.then((data) => {
				res.send({
					type: "success",
					msg: "Account created successfully",
				});
			})
			.catch((err) => {
				console.log(err);
				res.send({ type: "error", msg: "Failed to create the user" });
			});
	} else {
		res.send({ type: "error", msg: "Data field empty" });
	}
};

exports.login = (req, res) => {
	if (req.body.email && req.body.password) {
		User.findOne({ email: req.body.email })
			.then(async (usr) => {
				if (usr.email) {
					var match = await bcrypt.compare(
						req.body.password,
						usr.password
					);
					if (match) {
						delete usr._doc.password;
						delete usr._doc.__v;
						var token = jwt.sign(
							{
								_id: usr._id,
								email: usr.email,
								name: usr.name,
							},
							SECRET,
							{ expiresIn: "15m"}
						);
						res.cookie('token',token, {maxAge : 900000, httpOnly : true, sameSite : 'lax'})
						res.send(usr);
					} else {
						res.send({
							type: "error",
							msg: "Wrong email and password",
						});
					}
				} else {
					res.send({
						type: "error",
						msg: "Wrong email and password",
					});
				}
			})
			.catch((err) => {
				console.log(err);
				res.send({ type: "error", msg: "Failed to login" });
			});
	} else {
		res.send({ type: "error", msg: "Data field empty" });
	}
};


exports.getData = (req,res) =>{
	if(req.cookies.token){
		jwt.verify(req.cookies.token,SECRET, function(err, decoded){
			if(!err){
				console.log(decoded)
				res.send("Testing")		
			}else{
				res.clearCookie()
				res.status(401).send("Wrong")		
			}
		})
		
	}else{
		//res.clearCookie()
		res.status(401).send("No cookies")
	}
}