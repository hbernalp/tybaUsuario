const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const userRout = require("./v1/routes/userRouts");
const loginRouts = require("./v1/routes/loginRouts");
const registerRouts = require("./v1/routes/registerRouts");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
// app.use('/api', userRout);
app.use('/login', loginRouts);
app.use('/register', registerRouts);

// routes
app.get("/", (req, res) => {
    res.send("Welcome to tyba Api Test");
});


mongoose.set('strictQuery', true);
// MongoDb Connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log ("Connected to MongoDB"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("Server listening on port", port));