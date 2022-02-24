const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			require:true,
		},
		title: {
			type: String,
			require: true,
			min:3
		},
		desc: {
			type: String,
			min: 3,
			required: true,
			
		},
		rating: {
			type: Number,
			require: true,
			min: 0,
			max:5
		},
		lat: {
			type: Number,
			require:true
		},
		long: {
			require: true,
			type:Number
		}

  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", UserSchema);

// we are also maintaining the time staps so that we can keep a track when we created the user and when we updated the details
