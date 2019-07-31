var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting express-handlebars defaultLayout to main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes to give the server access to the routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  