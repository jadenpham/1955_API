//importing express from library
const express = require('express');
var app = express();
//importing bodyparser from lib
var bodyParser = require('body-parser');

//telling express to send json objects instead of render/redirect
app.use(bodyParser.json());

require('./backend/models/person.js');
//importing the model
var routes = require('./backend/config/routes.js');

routes(app);

app.listen(8000, () => {console.log("listening on 8000")})

