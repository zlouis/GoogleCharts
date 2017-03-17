// Node Dependencies
var express = require('express');
var mysql = require('mysql'); 
var bodyParser = require('body-parser');
 

// Set up Express
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Server Routing Map 
// ============================================================

// Serve Static elements
app.use(express.static('public'));

// Import DOM controller
var viewRouter = require('./controllers/view_controller.js');
app.use('/', viewRouter);

// Import API controller
// var apiRouter = require('./controllers/api-controllers.js');
// app.use('/', apiRouter);

// Import S3 (for .txt files) controller
// var s3Router = require('./controllers/s3-controllers.js').s3Router;
// app.use('/', s3Router);

// Catch all (404 route) - MUST BE THE LAST ONE LISTED
// app.get('*', function (req, res){
//   res.render('404');
// });


// Open Server
app.listen(port, function(){
  console.log('Listening on port ' + port);
});