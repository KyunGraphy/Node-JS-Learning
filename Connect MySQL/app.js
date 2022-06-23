const express = require('express')
const exhbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exhbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'hssv',
  password: '123456',
  port: '3306'
});

// simple query
connection.query(
  'SELECT * FROM student',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);