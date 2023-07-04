const express = require("express");
const bodyparser = require("body-parser");
const seq = require("./app/config/db");

require("dotenv").config();
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

// seq.connection;
app.get("/userid", (req, res, next) => {
  res.json({
    id: 2000
  });
});

app.listen(process.env.SERVER_PORT, () =>
  console.log(
    `Server is running on  http://localhost:${process.env.SERVER_PORT}`
  )
);
