var orm = require("../config/orm.js");

// code that will call ORM functions using burger specific input
// export at the end of file

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            console.log(res);
            cb(res);
        });
    }, 
    insertOne: function(burger, cb){
        orm.insertOne("burgers", burger, function(res){
            cb(res);
        });
    },
    updateOne: function(devoured, trueFalse, burger, burgerName, cb){
        orm.updateOne("burgers", devoured, trueFalse, burger, burgerName, function(res){
            cb(res);
        });
    }
};


module.exports = burger;