/*To use EJS
1.Every ejs file has an extrension .ejs
2.NodeJS looks into a folder "views" to render a page
3.Tell NodeJS to use ejs as page rendering engine

*/

var express = require("express");
var app = express();

app.use(express.static("css"));
app.use(bodyparser,urlendcoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("hello world");
});

app.get("/", function(req, res){
    res.render("Page not found");
});

app.get("/friends", function(req, res){
    res.render("friends");
});

var friendList = ["Alice", "Clark", "Bellamy", "Octavia"];
app.get("/friends", function(req,res){
    res.render("friends", {friends: friendList});
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friendList.push(newFriend);
    res.redirect("/friends");
    
});

app.listen(process.env.PORT, function(){
    console.log("Server is running...")
});
