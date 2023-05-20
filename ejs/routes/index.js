var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var db = mysql.createConnection({ // config connect db
  host: "localhost", // ip
  user: "root", // user login
  password: "password", // pass login
  database: "lab05db" // db name
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

router.get('/', function(req, res) {
  let sql = "select * from lab05tb"
  db.query(sql, function(error, result) {
    if (error) throw error
    console.log(result)
    res.render('index', { title: 'Demo Ejs', list: result });
  });
});

module.exports = router;