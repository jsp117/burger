var orm = require("../config/orm.js");

// code that will call ORM functions using burger specific input
// export at the end of file

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res){
            console.log(res);
            cb(res);
        });
    }, 
    insertOne: function(burger, cb){
        orm.insertOne("burgers", col, function(res){
            cb(res);
        });
    },
    updateOne: function(devoured, trueFalse, burger, burgername, cb){
        orm.updateOne("burgers", col1, trueFalse, col2, value, function(res){
            cb(res);
        });
    }
};


module.exports = burger;