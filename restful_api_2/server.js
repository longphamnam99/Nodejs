const express = require("express");
const path = require("path");
const cors = require("cors");
const fibonacci = require("fibonacci");

const app = express();

const port = 5562;

const router = express.Router();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

let display = (code = 200, message = "OK", data = null) => {
  return {
    status: code,
    message: message,
    data: data,
  };
};

let example_first = () => {
  router.get("/rectangular_area", (req, res) => {
    if (
      req.query.length < 1 ||
      req.query["length"] < 1 ||
      req.query["width"] < 1 ||
      req.query["length"] == req.query["width"]
    ) {
      return res.status(400).send(display(400, "The value is not define"));
    }
    let acreage = req.query["length"] * req.query["width"];
    return res.status(200).send(display(200, "OK", acreage));
  });
  router.post("/rectangular_area", (req, res) => {
    if (
      req.body.length < 1 ||
      req.body["length"] < 1 ||
      req.body["width"] < 1 ||
      req.body["length"] == req.body["width"]
    ) {
      return res.status(400).send(display(400, "The value is not define"));
    }
    let acreage = req.body["length"] * req.body["width"];
    return res.status(200).send(display(200, "OK", acreage));
  });
  router.put("/rectangular_area", (req, res) => {
    if (
      req.body.length < 1 ||
      req.body["length"] < 1 ||
      req.body["width"] < 1 ||
      req.body["length"] == req.body["width"]
    ) {
      return res.status(400).send(display(400, "The value is not define"));
    }

    let acreage = req.body["length"] * req.body["width"];
    return res.status(200).send(display(200, "OK", acreage));
  });
  router.delete("/rectangular_area", (req, res) => {
    if (
      req.body.length < 1 ||
      req.body["length"] < 1 ||
      req.body["width"] < 1 ||
      req.body["length"] == req.body["width"]
    ) {
      return res.status(400).send(display(400, "The value is not define"));
    }
    let acreage = req.body["length"] * req.body["width"];
    return res.status(200).send(display(200, "OK", acreage));
  });
  return router;
};

let example_second = () => {
  router.get("/fibonacci", (req, res) => {
    if (req.query.n < 2) {
      return res.status(400).send(display(400, "The value is not define"));
    }
    const number = fibonacci.iterate(req.query.n);
    return res.status(200).send(display(200, "OK", number));
  });
  router.post("/fibonacci", (req, res) => {
    if (req.body["n"] < 2) {
      return res.status(400).send(display(400, "The value is not define"));
    }
    const number = fibonacci.iterate(req.body["n"]);
    return res.status(200).send(display(200, "OK", number));
  });
  router.put("/fibonacci", (req, res) => {
    if (req.body["n"] < 2) {
      return res.status(400).send(display(400, "The value is not define"));
    }
    const number = fibonacci.iterate(req.body["n"]);
    return res.status(200).send(display(200, "OK", number));
  });
  router.delete("/fibonacci", (req, res) => {
    if (req.body["n"] < 2) {
      return res.status(400).send(display(400, "The value is not define"));
    }
    const number = fibonacci.iterate(req.body["n"]);
    return res.status(200).send(display(200, "OK", number));
  });
  return router;
};

app.use("/api/example_first/", example_first());
app.use("/api/example_second/", example_second());

app.get("/example_first", function (req, res) {
  res.sendFile(path.join(__dirname + "/example_first.html"));
});
app.get("/example_second", function (req, res) {
  res.sendFile(path.join(__dirname + "/example_second.html"));
});

app.listen(port, (req, res) => {
  console.log("Server start at: http://localhost:" + port);
});
