var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports = {
 
  index: function (req, res){
    Animal.find({}, function(err, animal){
      res.render('index', {animal: animal})
    })
  },  

  show: function(req, res) {
    Animal.findOne({_id: req.params.id}, function(err, animal){
    console.log(JSON.stringify(animal));
    res.render('show', {animal:animal})
    }) 
  
  },
  create: function(req, res) {
    var animal = new Animal({name: req.body.name, animal: req.body.animal});
    animal.save(function(err){
      var errors = []; 
      errors = [];
      if(err){
        for( var x in err.errors){
          errors.push(err.errors[x].message);
        }
        res.redirect('/mongooses/new')
      }
      else{
        res.redirect('/')
      }
    })
  },
  destroy: function(req, res){
    Animal.remove({_id: req.params.id}, function(err, animal){
      res.redirect('/');
    })
  },
  update: function(req, res){
    Animal.update({_id: req.params.id}, {name: req.body.name, animal: req.body.animal}, function(err, animal){
      res.redirect('/mongooses/'+req.params.id)
    })
  }
}
