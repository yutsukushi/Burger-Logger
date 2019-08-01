// // Setting up MySQL connection
// var mysql = require("mysql");

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// }else {

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "burgers_db"
// });
// }


// // Make connection
// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
  
//     console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use
// module.exports = connection;

// REQUIRED PACKAGES 
var mysql = require ("mysql"); 
var express = require("express"); 
// INITIALIZING APP VAR TO USE EXPRESS 
var app = express(); 
// DECLARING PORT 
var PORT = process.env.PORT || 3000; 
// DATABASE CONNECTION
// connection var
var connection ; 
if (process.env.JAWSDB_URL) { 
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else { 
    connection = mysql.createConnection({
        host: "localhost", 
        port: 3306, 
        user: "root", 
        password: "password", 
        database: "burgers_db"
    })
}
// var connection = mysql.createConnection ({
//     host: "localhost", 
//     port: 3306, 
//     user: "root", 
//     password: "", 
//     database: "burger_db" 
// }); 
// actually connecting to the db 
connection.connect (function (err) {
    if (err) {
        console.log("Connection error: " + err.stack);
        return; 
    }
    console.log ("Connected as id + " + connection.threadId); 
})
module.exports = connection; 