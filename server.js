//Dependencies
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var express = require("express");
var bodyParser = require("body-parser");

var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodoverride("_method"));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultlayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/")
