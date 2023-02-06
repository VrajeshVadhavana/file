var express = require("express");
var app = express();
var port = process.env.PORT || 9090;
var cors = require("cors");
app.use(cors());
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/api.json")
});
app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is running at "+port)
    }
});