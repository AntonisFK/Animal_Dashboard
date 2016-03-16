var animals = require('../controllers/animals.js');
module.exports = function(app){
  

  app.get('/', function(req, res){
    animals.index(req, res)
  });


  app.get('/mongooses/new', function(req, res){
    res.render('create')
  });

  app.get('/mongooses/:id', function(req, res){
    animals.show(req, res)
  });

  app.post('/mongooses', function(req, res){
    animals.create(req, res)
  });

  app.post('/mongooses/:id/destroy', function(req, res){
    animals.destroy(req, res)
  });

  app.post('/mongooses/:id', function(req, res){
    animals.update(req, res)
  });
}