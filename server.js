// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var serveStatic = require("serve-static");
var methodOverride = require('method-override');


// Sets up the Express App
// =============================================================
var app = express();
// var PORT = process.env.PORT || 3002;
var port = 8889;

// Sets up the Express app to handle data parsing
// app.use(express.static("app/public"));
app.use(express.static(path.join(__dirname + 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // 
app.use(bodyParser.text());


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);

console.log("Listening on port " + port);