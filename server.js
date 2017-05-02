// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require('axios');
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var validator = require('validator')

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname _ '/app'))



const authRoutes = require ('./server/routes/auth')(app);
app.use('/auth', authRoutes);











//PASSPORT
app.use(cookieParser());
app.use(session({secret: 'makeanallybeanally'}));
app.use(passport.initialize());

const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);
const authRoutes = require('./server/passport/auth')(app,passport);
const apiRoutes = require('./server/passport/api')(app);
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
require('./server/passport.js')(app, passport);


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




app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '/public/index.html'))
})

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


