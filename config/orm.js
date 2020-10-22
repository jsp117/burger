const connection = require("../config/connection.js")

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

const orm = {
    selectAll: function (tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput, function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },

    insertOne: function (tableInput, col, value, cb) {
        var queryString = `INSERT INTO ${tableInput} SET ${col} = ${value}`;

        connection.query(queryString, [tableInput, col, value], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function (tableInput, col1, value1, col2, value2, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, col1, value1, col2, value2], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};


module.exports = orm;