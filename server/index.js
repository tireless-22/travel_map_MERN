const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());

const pinRoute = require("./routes/Pins");

const userRoute = require("./routes/Users");


mongoose.connect(
	"mongodb+srv://knk:knk@crud.f2ly3.mongodb.net/travelmap?retryWrites=true&w=majority",
);


app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);



app.listen(3001, () => {
	console.log("server is running at 3001");
})
