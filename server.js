const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://amim:Amim123@cluster0.qam3hyp.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser : true,
    //useFindAndModify : false,
    useUnifiedTopology : true
}
);

const db = mongoose.connection;

db.on("error",console.error.bind(console,"connection error : "));
db.once("open", function(){
    console.log("connection successfuly");
});

app.use(Router);

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});