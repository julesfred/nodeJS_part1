var express = require("express");
var routes = express.Router();

routes.get("/task", function (req, res){
    res.send("retrieves rows of tasks")
});
routes.post("/task", function (req, res){
    res.send("adds a new task")
});
routes.put("/task", function (req, res){
    res.send("allows us to update a task")
});
routes.delete("/task", function (req, res){
    res.send("deletes a task")
});

module.exports = routes;