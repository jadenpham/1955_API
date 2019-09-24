var mongoose = require('mongoose'),
    Persons = mongoose.model("Persons");


//taking controller methods to route from url    
var persons = require('../controller/persons.js');

module.exports = function(app){
    app.get('/', function(req, res){
        persons.show(req, res);
    })
    app.get('/new/:name', function(req, res){
        persons.add(req, res);
    })
    app.get('/:name', function(req, res){
        persons.showOne(req,res);
    })
    app.get('/remove/:name', function(req, res){
        persons.remove(req, res);
    })
}