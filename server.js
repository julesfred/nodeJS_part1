var http = require("http");

var myInfo = require("./taskList.js");
console.log(myInfo);

http.createServer(function(request, response){
    response.writeHead(200, {"Content-type": "text/plain"}); 
    response.write(myInfo[Math.floor(Math.random()*myInfo.length)]); 
    response.end(); 
}).listen(3000);
