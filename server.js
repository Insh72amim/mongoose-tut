const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config({ path: "./config.env" });
const mongoose = require("mongoose");
const MONGO_URI =  process.env.ATLAS_URI;
const PORT = process.env.PORT;

mongoose.connect(MONGO_URI,
{
    useNewUrlParser : true,
    useUnifiedTopology : true
}
);
const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error : "));
db.once("open", function(){
    console.log("connection successfuly");
});


const Router = require("./routes");
app.use(Router);


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});