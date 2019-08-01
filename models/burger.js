var orm = require("../config/orm.js");

var burger = {

// // select all burgers
selectAll: function(cb) { //`table` parameter doesn't have to be defined since we define it in below code as the "burgers" table that follows up with our callback function

    orm.selectAll("burgers", function(result) {
        cb(result);
    });
},


// // insert a burger
insertOne: function(cols, vals, cb) {
    
    orm.insertOne("burgers", cols, vals, function(result) {
        cb(result);
    });

},
// // update a burger
updateOne: function(id, cb) {
    console.log("id =" + id);
    var condition = "id =" + id;
    orm.updateOne("burgers", {devoured: true}, condition, function(result) {
        cb(result);
    })
}

};

module.exports = burger;