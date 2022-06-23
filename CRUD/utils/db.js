// const sqlConfig = require('../config/config.js')
// const cn = sqlConfig.connection;
const mysql = require("mysql2");

// create the connection to database
const cn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "hssv",
  password: "123456",
  port: "3306",
});

module.exports = {
  load: function (sql) {
    // simple query
    return new Promise(function (resolve, reject) {
      cn.query(sql, function (err, results, fields) {
        if (err) {
          return reject(err);
        }

        // console.log(results); // results contains rows returned by server
        resolve(results);
      });
    });
  },
  // insert: function (sql) {
  //   return new Promise(function (resolve, reject) {

  //   })
  // }
};
