var orm = require("./config/orm.js");

module.exports = function(app) {

// select all burgers
orm.selectAll("burger_name");

// insert a burger
orm.insertOne("burger_name", devoured);

// update a burger
orm.updateOne("burger_name", id);

}