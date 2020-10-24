const express = require("express");
var router = express.Router();

const burger = require("../models/burger.js");

// displays all burgers on load
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var all = {
            burgers: data
        };
        res.render("index", all);
    });
});

// updates devoured status on click
router.put("/api/eat/:id", function (req, res) {
    var id = req.params.id;
    burger.updateOne(id, function (data) {
        console.log(data);
    });
    res.status(200).end();
});

// deletes burger on click
router.delete("/api/trash/:id", function (req, res) {
    var id = req.params.id;
    burger.deleteOne(id, function (data) {
        console.log(data);
    });
    res.status(200).end();
});

// adds burger on click
router.post("/api/add/", function (req, res) {
    var name = req.body.name;
    burger.insertOne(name, function (data) {
        console.log(data);
    });
    res.status(200).end();
});

module.exports = router;