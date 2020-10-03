const express = require("express");
const cors = require("cors");
const config = require('./config.js');
const mongoose = require("mongoose")
const Book = require("./api/models/bookModel"); //created model loading here
const bodyParser = require('body-parser');
const app = express();

// << db setup >>
const db = require("./dbCon");
const dbName = "BooksAPI";
const collectionName = "books";

mongoose.Promise = global.Promise;
mongoose.connect(config.databaseURL, config.options)
    .then(() => {
        console.log('MongoDB Connected…');
    })
    .catch(err => console.log(err));

//app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors());

//ROUTES TO USE
var routes = require("./api/routes/bookRoutes");
routes(app);

app.listen(config.port, () => {
    console.log(`Server listening at ${config.port}`)
});