const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const dbConnection = require("./Config/dbConnection");
const authRouth = require('./Controller/authController').default
const PORT = process.env.PORT || 5400;

dbConnection();
const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use('api/v1/auth',authRouth);
app.listen(() => {
  console.log(`APP IS RUNING ON PORT ${PORT}`);
});
