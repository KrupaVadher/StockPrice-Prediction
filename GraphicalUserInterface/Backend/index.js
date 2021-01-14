var express = require("express");
var app = express();
const mysql = require("mysql");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

const Database = require("./database");

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "StcokPrediction",
};

function getConnection() {
  return mysql.createConnection(config);
}

app.get("/amddata", (req, res) => {
  connection = getConnection();
  connection.query("Select Date, Close from AMD", (err, rows) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({ errors: ["Cannot get profile details"] });
    }
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(rows));
  });
  connection.end();
});

app.get("/appledata", (req, res) => {
  connection = getConnection();
  connection.query("Select Date, Close from Apple", (err, rows) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({ errors: ["Cannot get profile details"] });
    }
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(rows));
  });
  connection.end();
});

app.get("/disneydata", (req, res) => {
  connection = getConnection();
  connection.query("Select Date, Close from Disney", (err, rows) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({ errors: ["Cannot get profile details"] });
    }
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(rows));
  });
  connection.end();
});

app.get("/tesladata", (req, res) => {
  connection = getConnection();
  connection.query("Select Date, Close from Tesla", (err, rows) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({ errors: ["Cannot get profile details"] });
    }
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(JSON.stringify(rows));
  });
  connection.end();
});
app.listen(3001);
console.log("Server Listening on port 3001");
