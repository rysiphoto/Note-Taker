const path = require("path");
const routes = require("express").Router();

routes.get("../public/notes", function (req, res) {

    res.sendFile(path.join(__dirname, "../public/notes"));
});

routes.get("*", function (req, res) {

    res.sendFile(path.join(__dirname, "../public/index"));
});

module.exports = routes;