var express = require("express");

var bodyParser = require("body-parser");

const cors = require("cors"); // sử dụng nếu rest

var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "system_db",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});

const port = 7777;

app.post("/api/add", (req, res) => {
  var name = req.body.name;
  var sql = "insert into device (name) values('" + name + "')";
  db.query(sql, function (error, result) {
    if (error) throw error;
    if (result.length < 1) {
      return res.send({
        code: 200,
        message: "ok",
      });
    }
    return res.send({
      code: 200,
      message: "ok",
      data: "Đã thêm thành công: " + result.affectedRows,
    });
  });
});

app.get("/api/search", (req, res) => {
  var id = req.query.id;
  //SELECT * FROM Customers WHERE CustomerName LIKE '%or%';
  var sql = "select * from device WHERE id = " + id;
  db.query(sql, function (error, result) {
    if (error) throw error;
    if (result.length < 1) {
      return res.send({
        code: 200,
        message: "ok",
        data: "Không tìm thấy kết quả",
      });
    }
    return res.send({
      code: 200,
      message: "ok",
      data: result,
    });
  });
});

app.get("/api/list", (req, res) => {
  let sql = "select * from device";
  db.query(sql, function (error, result) {
    if (error) throw error;
    res.send({
      code: 200,
      message: "ok",
      total: result.length,
      data: result,
    });
  });
});

app.put("/api/update/:id", (req, res) => {
  var id = req.params.id;
  var sql_check = "select * from device WHERE id = " + id;
  db.query(sql_check, function (error, result) {
    if (error) {
      return res.send({
        code: 200,
        message: "ok",
        data: error,
      });
    }
    if (result.length < 1) {
      return res.send({
        code: 400,
        message: "not ok",
        data: "Không tìm thấy kết quả phù hợp",
      });
    }
  });
  var name = req.body.name;
  let sql = "update device SET name = '" + name + "' WHERE id = " + id;
  db.query(sql, function (error, result) {
    if (error) {
      return res.send({
        code: 200,
        message: "ok",
        data: error,
      });
    }
    return res.send({
      code: 200,
      message: "ok",
      data: "Đã cập nhật thành công: " + result.affectedRows,
    });
  });
});

app.delete("/api/delete/:id", (req, res) => {
  var id = req.params.id;
  var sql_check = "select * from device WHERE id = " + id;
  db.query(sql_check, function (error, result) {
    if (error) {
      return res.send({
        code: 200,
        message: "ok",
        data: error,
      });
    }
    if (result.length < 1) {
      return res.send({
        code: 400,
        message: "not ok",
        data: "Không tìm thấy kết quả phù hợp",
      });
    }
  });
  let sql = "delete from device WHERE id = " + id;
  db.query(sql, function (error, result) {
    if (error) {
      return res.send({
        code: 200,
        message: "ok",
        data: error,
      });
    }
    return res.send({
      code: 200,
      message: "ok",
      data: "Đã xoá thành công: " + result.affectedRows,
    });
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
// res.status(200).json()