const express = require("express");
var router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var all = {
            burgers: data
        };
        res.render("index", all);
    });
});

router.post("/api/eat/:id", function (req, res) {
    var id = req.params.id;
    burger.updateOne(id, function (data) {
        console.log(data);
    });
    res.render("index");
});

router.post("/api/add/", function (req, res) {
    var name = req.body.name;
    burger.insertOne(name, function (data) {
        console.log(data);
    });
    res.render("index");
});

module.exports = router;