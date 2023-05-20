const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const converMoney = require("./convert_money.js");
const province = require("./province.js");
const galleryImage = require("./gallery.js");

const app = express();
const router = express.Router();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});

const route = () => {
  router.post("/convert_money", async (req, res) => await converMoney(req, res));
  router.get("/province", (req, res) => {
    res.send(province);
  });
  router.get("/gallery", (req, res) => {
    res.send({
      status: 200,
      message: "OK",
      data: galleryImage
    });
  })
  return router;
}

app.use("/api", route());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/convert_money", (req, res) => {
  res.sendFile(path.join(__dirname + "/convert_money.html"));
});

app.get("/convert_f_to_c", (req, res) => {
  res.sendFile(path.join(__dirname + "/convert_f_to_c.html"));
});

app.get("/triangle_area", (req, res) => {
  res.sendFile(path.join(__dirname + "/triangle_area.html"));
});

app.get("/province", (req, res) => {
  res.sendFile(path.join(__dirname + "/province.html"));
});

app.get("/map", (req, res) => {
  res.sendFile(path.join(__dirname + "/map.html"));
});

app.use("/assets", express.static('./assets'));

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname + "/gallery.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
