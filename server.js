const express = require("express");
const cors = require("cors");
const config = require("./api/config/config.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect(config.databaseURL, config.options)
  .then(() => {
    console.log("MongoDB Connected…");
  })
  .catch((err) => console.log(err));

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

// API Routes
app.use("/api/", require("./api/routes/index"));
app.use("/api/users", require("./api/routes/userRoutes"));
app.use("/api/authors", require("./api/routes/authorRoutes"));
app.use("/api/books", require("./api/routes/bookRoutes"));
app.use("/api/genres", require("./api/routes/genreRoutes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/api/v1', routes);

app.listen(config.port, () => {
  console.log(`Server listening at ${config.port}`);
});
