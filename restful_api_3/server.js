var express = require("express");
var mysql = require("mysql");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "CustomerDB",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/add_customer", (req, res) => {
  const { customerName, sex, email, departmentID } = req.body;
  var sql =
    "INSERT INTO CustomerTB (customerName, sex, email, departmentID) VALUES ('" +
    customerName +
    "', '" +
    sex +
    "', '" +
    email +
    "', " +
    departmentID +
    ")";
  con.query(sql, (err, rs) => {
    if (err) {
      return res.send({
        status: 400,
        message: "not ok",
      });
    } else {
      res.send({
        status: 200,
        message: "ok",
        data: rs.affectedRows + " record(s) inserted",
      });
    }
  });
});

app.put("/update_customer/:id", (req, res) => {
  const id = req.params.id;
  const { customerName, sex, email, departmentID } = req.body;
  var sql =
    "UPDATE CustomerTB SET customerName = '" +
    customerName +
    "', sex = '" +
    sex +
    "', email = '" +
    email +
    "', departmentID = '" +
    departmentID +
    "'  WHERE customerID = " +
    id +
    "";
  con.query(sql, (err, rs) => {
    if (err) {
      return res.send({
        status: 400,
        message: "not ok",
      });
    } else {
      res.send({
        status: 200,
        message: "ok",
        data: rs.affectedRows + " record(s) updated",
      });
    }
  });
});

app.delete("/delete_customer/:id", (req, res) => {
  let id = req.params.id;
  let sql = "DELETE FROM CustomerTB  WHERE customerID = " + id + "";
  con.query(sql, (err, rs) => {
    if (err) {
      return res.send({
        status: 400,
        messange: "not ok",
      });
    } else {
      res.send({
        status: 200,
        messange: "ok",
        data: "Number of records deleted: " + rs.affectedRows,
      });
    }
  });
});

app.get("/find_customer", (req, res) => {
  let id = req.query.did;
  let sql =
    "SELECT c.customerID, c.customerName, d.departmentID, d.departmentName " +
    "FROM CustomerTB c " +
    "JOIN DepartmentTB d on c.departmentID = d.departmentID " +
    "WHERE d.departmentID = " +
    id;
  con.query(sql, (err, rs) => {
    if (err) {
      return res.send({
        status: 400,
        message: "not ok",
      });
    } else {
      res.send({
        status: 200,
        message: "ok",
        data: rs,
      });
    }
  });
});

var server = app.listen(5678, () => {
  var port = server.address().port;
  console.log("Server start at: http://localhost:" + port);
});


var id = req.query.did;