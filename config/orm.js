const connection = require("./connection.js")

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

const orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString), [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        }
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