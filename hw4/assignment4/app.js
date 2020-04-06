const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
app.set("view engine", "ejs");

//route
app.get("/", function(req, res){
        res.render('page1');
});

app.get("/page1", function(req, res){
  res.render('page1');
});

app.get("/page2", function(req, res){
  res.render('page2');
});

app.get("/page3", function(req, res){
  res.render('page3');
});

app.get("/page4", function(req, res){
res.render('page4');
});

app.get("*", function(req,res){
    res.send("Page Not Found");
    res.render("error");
});

//server listener
app.listen("8080", "127.0.0.1", function(){
    console.log("Express Server is Running...");
});

