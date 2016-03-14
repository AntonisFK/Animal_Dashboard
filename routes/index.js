module.exports = function Route (app, Animal){

  var errors= []; 

  app.get('/', function(req, res){
    //grab all animals and put them on the main page
    Animal.find({}, function(err, animal){
    res.render('index', {animal: animal})
    })
  })
  //waterfall method needs to be higher 
  app.get('/mongooses/new', function(req, res){
    res.render('create', {errors: errors})
  })
  
  app.get('/mongooses/:id', function(req, res){
    //grab animal by id 
    console.log(req.params.id)
    Animal.findOne({_id: req.params.id}, function(err, animal){
      console.log(JSON.stringify(animal));
      res.render('show', {animal:animal})
    })
  })


  app.post('/mongooses', function(req, res){

    var animal = new Animal({name: req.body.name, animal: req.body.animal});


    animal.save(function(err){
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
   
  })

//Delete a Animal
  app.post('/mongooses/:id/destroy', function(req, res){
    console.log("hi");
    console.log(req.params.id);
    Animal.remove({_id: req.params.id}, function(err, animal){
      res.redirect('/')
    })
  })

  //Update 
  app.post('/mongooses/:id', function(req, res){
    console.log("Update");
    Animal.update({_id: req.params.id}, {name: req.body.name, animal: req.body.animal}, function(err, animal){
      res.redirect('/mongooses/'+req.params.id)
    })

  })


}; 