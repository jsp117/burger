const express = require("express");
var router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
   res.redirect('/index');
});

router.get("/index", function (req, res) {
    burger.selectAll(function (data) {
        var all = {
            burgers: data
        };
        res.render("index", all);
    });
});



module.exports = router;