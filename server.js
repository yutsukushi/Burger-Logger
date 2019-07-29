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
  
      res.render("index", { burgers: data });
    });
  });

  // Post route -> back to home
app.post("/", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.task], function(err, result) {
      if (err) throw err;
  
      res.redirect("/");
    });
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  