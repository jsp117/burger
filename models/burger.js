var orm = require("../config/orm.js");

// code that will call ORM functions using burger specific input
// export at the end of file

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            // console.log(res);
            cb(res);
        });
    }, 
    insertOne: function(burger, cb){
        orm.insertOne("burgers", "burger_name", `'${burger}'`, function(res){
            cb(res);
        });
    },
    updateOne: function(id, cb){
        orm.updateOne("burgers", "devoured", 1, "id", id, function(res){
            cb(res);
        });
    }
};


module.exports = burger;