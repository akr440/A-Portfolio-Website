const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
});

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/contact.html");
})


app.post("/hom",(req,res)=>{
    res.redirect("/");
})

app.post("/docs.google.com/forms/u/0/d/e/1FAIpQLScI4k3CRqE7tmcOzk7tZeyd6BfcgPkzIrd7Bue2gMv-Ag7eFA/formResponse",(req,res)=>{
    res.send("submitted");
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port,()=>{
    console.log("server started successfully")
});