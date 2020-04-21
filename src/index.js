// var mysql = require('mysql');

// MYSQL_HOST=mysql
// MYSQL_PORT=3306
// MYSQL_USER=virk
// MYSQL_PASSWORD=password

// DB_NAME=lucid

function main() {
    var knex = require('knex')({
        client: 'mysql',
        connection: {
            host: "mysql",
            user: "virk",
            password: "password",
            database: "lucid"
        }
    });

    const sql = knex.select('*').from('users')
        .where(knex.raw('id = ?', [1]))
        .toSQL();


    console.log(sql.sql);
    console.log('select * from `users` where id = ?' === sql.sql);
    console.log('select * from "users" where id = ?' === sql.sql);


    process.exit(0);
}

main();

// var con = mysql.createConnection({
//     host: "mysql",
//     user: "virk",
//     password: "password",
//     database: "lucid"
// });
//
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     process.exit(0);
// });
