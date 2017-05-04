// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require('axios');

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ========= MONGOOSE ==========//
mongoose.Promise = Promise;

if (process.env.MONGODB_URI){
	mongoose.connect(process.env.MONGODB_URI)
} else {

// db: authTest
mongoose.connect("mongodb://localhost/authTest");
}
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
// =====END OF MONGOOSE =========


app.use(express.static(__dirname + '/public'));


app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '/public/index.html'))
})

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


