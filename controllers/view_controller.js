// Controllers for rendering webpages to DOM

// Node Dependencies
var express = require('express');
var viewRouter = express.Router();
var mysql = require('mysql');

//set up mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "googlechart_db"
})
//Connection to mysql
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})


viewRouter.get('/', function (req, res) {
  res.render('index');
});

viewRouter.get('/chart', function(req, res) {
  res.render('chart');
});

viewRouter.get('/d3js', function(req, res) {
  res.render('d3js');
})

// Queries through database
connection.query('SELECT * FROM products', function(err, res){
  if(err) throw err;
  var weaponStash = [];
      for (var i=0;i<res.length;i++){
        console.log(res[i].ItemID + res[i].Product)

           weaponStash.push({

          'Product': res[i].Product,
          'Quantity': res[i].Quantity,
          'Rarity': res[i].Rarity,
          'Class': res[i].Class 
           })
         }
         // res.render('index', {hbsObject: weaponStash});
    
      
})


module.exports = viewRouter