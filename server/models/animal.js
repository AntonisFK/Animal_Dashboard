var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
  name:  String,  
  animal: String 
})

//validations
AnimalSchema.path('name').required(true, "Name cannont be blank")
AnimalSchema.path('animal').required(true,"Animal cannot be blank")

// register the schema as a model
var Animal = mongoose.model('Animal', AnimalSchema)