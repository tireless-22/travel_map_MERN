const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");

router.post("/register", async (req, res) => {
	try {
		console.log("this is from the try of the register");

		// generate new password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		// create new user
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		});

		// save user and send response
		const user = await newUser.save();
		res.status(200)
			.json(user);
		
	}
	catch (e) {
		console.log("error in registering a new user");
		res.status(500).json(e);
	}
});


router.post("/login", async (req, res) => {
	try {
		// there is no need of writing the if condition,we will check 
		// if that conditon exist then we will send the response the client

		// finding the user
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(400).json("wring user id");


		// validating the password
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		!validPassword && res.status(400).json(
			"incorrectr password"
		);

		res.status(200).json({ _id: user._id, username: user.username });

		
	}
	catch (e) {
		
		res.status(500).json(e);
	}

})





module.exports = router;
