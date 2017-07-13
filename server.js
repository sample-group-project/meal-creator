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

application.get('/get/breakfast', (request, response) => {
    response.render('view-meals', model);
})

application.get('/get/lunch', (request, response) => {
    response.render('view-meals', model);
})

application.get('/get/dinner', (request, response) => {
    response.render('view-meals', model);
})

application.get('/get/day', (request, response) => {
    response.render('view-meals', model);
})

application.get('/index/add-meal' , (request, response) => {
    response.render('add-meal');
});

application.post('/index/add-meal', (request, response) => {
    // should pull value of whatever radio button is pressed
    var mealType = request.body.type;
    var mealName = request.body.name;
    var mealCalories = request.body.calories;

    if (mealType == "breakfast") {
        var breakfastType = data.breakfast;
        var newMeal = {
            description: mealName,
            calories: mealCalories
        }

        let addBreakfast = breakfastType.push(newMeal);

        var saveJSONData = JSON.stringify(data);
        fs.writeFile('./models/data.json', saveJSONData, function (err) { });

        response.redirect('/index');

    } else if (mealType == "lunch") {
        var lunchType = data.lunch;
        var newMeal = {
            description: mealName,
            calories: mealCalories
        }

        let addLunch = lunchType.push(newMeal);

        var saveJSONData = JSON.stringify(data);
        fs.writeFile('./models/data.json', saveJSONData, function (err) { });

        response.redirect('/index');

    } else if (mealType == "dinner") {

        var dinnerType = data.dinner;
        var newMeal = {
            description: mealName,
            calories: mealCalories
        }

        let addDinner = dinnerType.push(newMeal);

        var saveJSONData = JSON.stringify(data);
        fs.writeFile('./models/data.json', saveJSONData, function (err) { });

        response.redirect('/index');

    } else {
        response.render('add-meal');
    }
});

application.post('/index/view-meal/:meal', (request, response) => {
    var chosenMeal = request.params.meal;
})

// model = {
//     description: meal.description,
//     calories: meal.calories
// }

application.listen(3000);