const express = require("express");
const cors = require("cors");
const config = require('./api/config/config.js');
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
var routes = require("./api/routes/apiRoutes.js");

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

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/api/v1', routes);

//ROUTES TO USE
routes(app);

//router.use('/api-docs', swaggerUi.serve);
//router.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(config.port, () => {
    console.log(`Server listening at ${config.port}`)
});