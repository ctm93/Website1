var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.engine('html', require('ejs').renderFile);
app.use(express.static("css"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
//only hold ejs files in views folder otherwise it won't work
app.set("view engine", "ejs");

app.get('/', function(req, res){
  res.redirect('/home');
});

app.get("/home", function(req, res){
  res.render('home');
});

app.get("/mercury", function(req, res){
  res.render('mercury');
});

app.get("/venus", function(req, res){
  res.render('venus');
});

app.get("/earth", function(req, res){
res.render('earth');
});

app.get("*", function(req,res){
    res.send("Page Not Found");
    res.render("error");
});


app.listen(process.env.PORT,function(){
    console.log("Server up and running");
});