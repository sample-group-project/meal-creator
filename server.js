const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');

const data = require('./models/data.json');

var application = express();

application.engine('handlebars', expressHandlebars());
application.set('view engine', 'handlebars');

application.use(bodyParser.urlencoded());

application.use('/public', express.static('./public'));

application.get('/', (request, response) => {
    response.redirect('/index');
});

application.get('/index', (request, response) => {
    response.render('index');
});

application.post('/index/add-meal', (request, response) => {
    var mealType = request.body.type;
    var mealName = request.body.name;

    
});
// model = {
//     description: meal.description,
//     calories: meal.calories
// }

application.listen(3000);