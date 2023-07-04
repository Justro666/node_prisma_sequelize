const express = require("express");
const bodyparser = require("body-parser");
const sql = require("./app/config/db");

require("dotenv").config();
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

const attendanceRoute = require("./app/router/attendance");

app.use("/attendance", attendanceRoute);

app.use((err, req, res, next) => {
  err.status = err.status || 500;
  res.status(err.status).json({ con: false, msg: err.message });
});
app.listen(process.env.PORT, () =>
  console.log(`Server is running on  http://localhost:${process.env.PORT}`)
);
