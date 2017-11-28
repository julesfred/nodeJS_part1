// var http = require("http");

// var myInfo = require("./taskList.js");
// console.log(myInfo);

// http.createServer(function(request, response){
//     response.writeHead(200, {"Content-type": "text/plain"}); 
//     response.write(myInfo[Math.floor(Math.random()*myInfo.length)]); 
//     response.end(); 
// }).listen(3000);

var express = require("express");
var app = express();
var languages = require("./language-routes.js");

app.use(express.static(__dirname + "/public"));
app.use("/", languages);

var server = app.listen(3000, function(){
    console.log("server is running");
})