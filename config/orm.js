const connection = require("./connection")

const obj = {
    selectAll: function () {
        connection.query("SELECT * FROM burgers");
    },
    insertOne: function (x) {
        connection.query(`INSERT INTO burgers SET burger_name = ${x}`);
    },
    updateOne: function (x) {
        connection.query(`UPDATE burger SET devoured = true WHERE burger_name = ${x}`);
    }
};


module.exports = obj;