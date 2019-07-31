var express = require("express");
var connection = require("../config/connection.js");

var burger = require("../models/burger");

var router = express.Router();

// Root get route
router.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;

    res.render("index", { burgers: data });
  });
});

// Post route -> back to home
router.post("/", function(req, res) {
  // column name, column value (both arrays)
  burger.insertOne(["burger_name"],[req.body.burgerText], function(result){
    console.log("inserted the burger");
    res.redirect("/");
  })
});


  // Update a quote by an id and then redirect to the root route.
  router.put("/burger/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result){
      console.log(result);
      res.sendStatus(200);
    })
   
  });

module.exports = router;