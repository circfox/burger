//Dependencies
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var express = require("express");
var bodyParser = require("body-parser");

var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// Sets up the Express App
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride("_method"));
// var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultlayout: "main"
}));
app.set("view engine", "handlebars");

// Routes
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Starts the server to begin listening
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});
