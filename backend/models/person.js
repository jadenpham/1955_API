var mongoose = require('mongoose');
var connection = require('../config/mongoose.js');
var PersonSchema = new mongoose.Schema({
    name: {type: String}
})
//.model is creating a blueprint so can add collection to db
mongoose.model("Persons", PersonSchema);

var Persons = mongoose.model("Persons");

mongoose.Promise = global.Promise;