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

module.exports = connection;