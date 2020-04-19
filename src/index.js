var mysql = require('mysql');

// MYSQL_HOST=mysql
// MYSQL_PORT=3306
// MYSQL_USER=virk
// MYSQL_PASSWORD=password

// DB_NAME=lucid

var con = mysql.createConnection({
    host: "mysql",
    user: "virk",
    password: "password",
    database: "lucid"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
