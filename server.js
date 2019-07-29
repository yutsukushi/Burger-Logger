var express = require("express");
var exphbs = require("express-handlebars");
// var mysql = require("mysql");
var connection = require("./config/connection");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting express-handlebars defaultLayout to main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) throw err;
  
      // Test it
      // console.log('The solution is: ', data);
  
      // Test it
      // return res.send(data);
  
      res.render("index", { burgers: data });
    });
  });

  // Post route -> back to home
app.post("/", function(req, res) {
    // Test it
    // console.log('You sent, ' + req.body.task);
  
    // Test it
    // return res.send('You sent, ' + req.body.task);
  
    // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
    // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
    // https://en.wikipedia.org/wiki/SQL_injection
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.task], function(err, result) {
      if (err) throw err;
  
      res.redirect("/");
    });
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  