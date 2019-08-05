// Invoke Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Set up Express
var app = express();
var PORT = process.env.PORT || 3000;

// Set up Express for the purpose of handling data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app/public'));

// Import routes for our use.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// start server and listen
app.listen(PORT, function() {
	console.log("The Dating App is listening on PORT " + PORT);
});
