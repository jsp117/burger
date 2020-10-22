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
            console.log(result);
            cb(result);
        });
    },

    insertOne: function (tableInput, col, cb) {
        var queryString = "INSERT INTO " + tableInput;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString), [tableInput, col], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        }
    },
    updateOne: function (tableInput, col1, trueFalse, col2, value, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString), [tableInput, col1, trueFalse, col2, value], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        }
    }
};


module.exports = orm;