var connection = require("./connection.js");

var orm = {
    // select all burgers
    selectAll: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";

        console.log(queryString);
        
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, res) {
            if (err) throw err;
            console.log(res);
        })
    },
    // insert a burger
    insertOne: function() {
        var queryString = "SELECT & FROM "
        // code here
    },
    // update a burger
    updateOne: function() {
        // code here
    }
}

module.exports = orm;