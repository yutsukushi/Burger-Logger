// Import MySQL connection.
var connection = require("./connection");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
	//function that returns all table entries
	selectAll: function(tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
		      if (err) {
		        throw err;
		      }
		      cb(result);
	    });
	},

	//puts new data into burgers table
	insertOne: function(table, cols, vals, cb ){
    console.log("cols to string: " + cols.toString);
		var queryString = "INSERT INTO " + table;

    // mySQL syntax to set up data entry
	    queryString += " (";
	    queryString += cols.toString(); 
	    queryString += ") ";
	    queryString += "VALUES (";
	    queryString += printQuestionMarks(vals.length); //function that creates appropriate amount of questionmarks to apply values
	    queryString += ") ";

	    console.log(queryString);
	    connection.query(queryString, vals, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      cb(result); //callback results 
	    });
  },
  
  // function that updates a single table entry
  
	updateOne: function(table, objColVals, condition, cb){
		var queryString = "UPDATE " + table;

	    queryString += " SET ";
	    queryString += objToSql(objColVals); //function that sets "property: value" to "property = value" for mySQL syntax
	    queryString += " WHERE ";
	    queryString += condition; //condition is stated in burger.js

	    console.log(queryString);
	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      cb(result); //callback function for results returned
	    });

	}
};//end of orm

module.exports = orm;