var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

//connect and create database 
mongoose.connect('mongodb://localhost/MongooseDashboard');

mongoose.connection.on('error', function (err){});

// declare Animal schema 

var AnimalSchema = new mongoose.Schema({
  name:  String,  
  animal: String 
})

//validations
AnimalSchema.path('name').required(true, "Name cannont be blank")
AnimalSchema.path('animal').required(true,"Animal cannot be blank")

//store Schema under name Animal 
var Animal = mongoose.model('Animal', AnimalSchema)
app.use(bodyParser.urlencoded({extended:true}));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//we're going to have /routes/index.js handle all of our routing

// setting server to run on port 3000
 app.listen(3000, function() {
 console.log("listening on port 3000!");
})

var route = require('./routes/index.js')(app, Animal);

