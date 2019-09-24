var mongoose = require('mongoose');
    Persons = mongoose.model("Persons");


//exporting methods to be used in routes
module.exports = {
    show: function(req, res){
        Persons.find({})
        //if able to find the query, put it into persons object
        .then( persons => {
            //persons is the whole object from the query coming back
           res.json(persons);
        })
        //if not then put the error in json object
        .catch(err => res.json(err));
    },
    //adding person into db
    add: function(req, res){
        //grabbing info from url/routes, /new/:name
        Persons.create({name: req.params.name})
        //if adding successful, show added person as json
        .then( persons => {
            res.json(persons);
            res.redirect('/');
        })
        .catch(err => res.json(err));
    },
    //showing one person's info
    showOne: function(req, res){
        Persons.findOne({name: req.params.name})
        .then( person => {
            res.json(person);
        })
        .catch(err => res.json(err));
    },
    //removing name from db
    remove: function(req, res){
        Persons.deleteOne({name: req.params.name})
        //result will take in message from db after action
        .then( result => {
            res.json(result);
        })
        .catch(err => res.json(err));
    }
}