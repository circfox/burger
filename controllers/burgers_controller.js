var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var x= require("../models/burger.js");

// create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  x.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  x.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  console.log("condition", condition);

  x.update({
    
  })