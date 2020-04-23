const path = require("path");
const routes = require("express").Router();

routes.get("/notes", function (req, res) {

    res.sendFile(path.join(__dirname, "/notes"));
});

routes.get("*", function (req, res) {

    res.sendFile(path.join(__dirname, "/index"));
});

module.exports = routes;