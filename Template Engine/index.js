const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
// const { dirname } = require('path');
const hbs = exphbs.create( { extname: '.hbs'});
const path = require('path');

// TEMPLATE ENGINE
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
// CHANGE THE LINK PATH IF YOUR CONSTRUCTOR DOES NOT FOLLOW THE DIRECTION
app.set("views", path.join(__dirname, 'views'));
console.log(__dirname);

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/page', function (req, res) {
    res.render('sub');
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});