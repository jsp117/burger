const burger = require("../models/burger.js");
const express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var all = {
            burgers: data
        };
        res.render("index", all);
    });
});



module.exports = router;