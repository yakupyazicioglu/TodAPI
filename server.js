const express = require("express");
const cors = require("cors");
const config = require('./config.js');
const mongoose = require("mongoose")
const Book = require("./api/models/book");
const Author = require("./api/models/author");
const Genre = require("./api/models/genre");
const bodyParser = require('body-parser');
var routes = require("./api/routes/bookRoutes");
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.databaseURL, config.options)
    .then(() => {
        console.log('MongoDB Connected…');
    })
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors());

//ROUTES TO USE
routes(app);

app.listen(config.port, () => {
    console.log(`Server listening at ${config.port}`)
});