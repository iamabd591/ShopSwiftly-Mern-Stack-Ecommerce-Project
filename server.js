const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const dbConnection = require("./Config/dbConnection");
const PORT = process.env.PORT || 5400;

dbConnection();
const app = express();
app.listen(() => {
  console.log(`APP IS RUNING ON PORT ${PORT}`);
});
