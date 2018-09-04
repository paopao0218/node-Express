var express = require("express");
var app = express();
var router=require('./router/router')
var bodyParser = require('body-parser')
app.engine("html", require("express-art-template"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use(router);


app.listen(3000, function() {
  console.log("server is runings …………");
});
