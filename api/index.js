const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("connected to MongoDB"))
    .catch((err) => console.log(err));

    app.use("/api/auth", authRoute);


app.use("/write", (req,res)=>{
    console.log("hey this is write")
})

app.listen("5000", ()=>{
    console.log("Backend is alive on port 5000")
});
