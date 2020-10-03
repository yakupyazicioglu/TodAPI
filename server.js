var express = require("express"); 

var app = express();
var port = process.env.PORT || 3000;
var mongoose = require("mongoose");
var Book = require("./api/models/bookModel"); //created model loading here
var bodyParser = require("body-parser");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://hazelnut:Yy112358@mylibrary.dkpba.mongodb.net/<MyLibrary>?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// mongoose instance connection url connections
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/BooksDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + " not found"
  });
});

var routes = require("./api/routes/bookRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("book list RESTful API server started on: " + port);