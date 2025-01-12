require("dotenv").config();

//# CONFIG EXPRESS
const express = require("express");
const app = express();
const { APP_HOST, APP_PORT } = process.env;

//# MIDDLEWARES
app.use(express.json());
app.use(express.static("public"));

//# REGISTERING ROUTES
const moviesRouter = require("./routers/moviesRouter");
app.use("/api/movies", moviesRouter);

//# MANAGE ERRORS
const notFound = require("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");
app.use(notFound);
app.use(errorsHandler);

//#SERVER LISTENING
app.listen(APP_PORT, () => {
  console.log(`App listening on ${APP_HOST}:${APP_PORT}`);
});
