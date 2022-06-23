const express = require('express')
const exhbs = require('express-handlebars')
const app = express()

const route = require("./routes/index.route")

app.engine('handlebars', exhbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

route(app);

app.listen(3000)

// app.get('/home', (req, res) => {
//     res.render('home');
// });

// app.get('/news', (req, res) => {
//     res.render('news');
// });

// app.get('/search', (req, res) => {
//     res.render('search');
// });

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
