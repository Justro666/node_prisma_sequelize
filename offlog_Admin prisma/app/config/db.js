const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: "3307",
  user: "root",
  password: "",
  database: "node_testing"
});

module.exports = pool.promise();
