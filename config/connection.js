var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "iezlor8mq3xoxish",
  password: "cl96c1mozcj2blwy",
  database: "lmtsqlc5fv6up3nc"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;
