// // get the client
// const mysql = require('mysql2');

// // create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'hssv',
//   password: '123456',
//   port: '3306'
// });

const connection = require('./db/util')

const sql = 'SELECT * FROM student WHERE age > 16'
const add = "INSERT INTO student (idstudent, name, age) VALUES (4, 'Kane', 22)"
const era = "DELETE FROM hssv.student WHERE (idstudent = '4')";

// simple query
const show = function(sql) {
  connection.query(
    sql,
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
    }
  );
}

const insert = function(sql) {
  connection.query(
    sql,
    // function(err, results, fields) {
    //   console.log(results); // results contains rows returned by server
    //   // console.log(fields); // fields contains extra meta data about results, if available
    // }
  );

  let all = 'SELECT * FROM student'
  show(all);
}

const del = function(sql) {
  connection.query(
    sql,
    // function(err, results, fields) {
    //   console.log(results); // results contains rows returned by server
    //   // console.log(fields); // fields contains extra meta data about results, if available
    // }

    );

    let all = 'SELECT * FROM student'
    show(all);
}

show(sql)