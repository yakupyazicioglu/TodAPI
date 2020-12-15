const express = require("express");
const cors = require("cors");
const config = require('./config.js');
const mongoose = require("mongoose")
const Book = require("./api/models/book");
const Author = require("./api/models/author");
const Genre = require("./api/models/genre");
const bodyParser = require('body-parser');
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')
var routes = require("./api/routes/apiRoutes.js");

AdminBro.registerAdapter(require('admin-bro-mongoose'))

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

const adminBro = new AdminBro({
    resources: [Book,Author,Genre],
    rootPath: '/collections',
  });

// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

//ROUTES TO USE
routes(app);

app.listen(config.port, () => {
    console.log(`Server listening at ${config.port}`)
});