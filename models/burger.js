const orm = require("../config/orm.js");

// code that will call ORM functions using burger specific input
// export at the end of file

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    }, 
    insertOne: function(col, cb){
        orm.insertOne("burgers", col, function(res){
            cb(res);
        });
    },
    updateOne: function(col1, trueFalse, col2, value, cb){
        orm.updateOne("burgers", col1, trueFalse, col2, value, function(res){
            cb(res);
        });
    }
};




module.exports = burger;