var express = require("express");
const cors = require("cors");
// var cookies = require("cookie-parser");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
// app.use(cookies());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

//cac router
require("./src/routers/product.route")(app);

app.listen(6000, function () {
  console.log("Server listening on http://localhost:6000");
});
