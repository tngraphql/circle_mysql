// var mysql = require('mysql');

// MYSQL_HOST=mysql
// MYSQL_PORT=3306
// MYSQL_USER=virk
// MYSQL_PASSWORD=password

// DB_NAME=lucid

async function main() {
    var knex = require('knex')({
        client: 'mysql',
        connection: {
            host: "mysql",
            user: "virk",
            password: "password",
            database: "lucid"
        }
    });
    // var knex = require('knex')({
    //     client: 'mysql',
    //     connection: {
    //         host: "localhost",
    //         user: "root",
    //         password: "123123As",
    //         database: "lucid"
    //     }
    // });


    const hasUsersTable = await knex.schema.hasTable('users')
    if ( ! hasUsersTable ) {
        await knex.schema.createTable('users', (table) => {
            table.increments()
            table.integer('country_id')
            table.string('username', 100).unique()
            table.string('email', 100).unique()
            table.integer('points').defaultTo(0)
            table.dateTime('joined_at', { useTz: false })
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').nullable()
        })
    }

    const sql = knex.select('*').from('users')
        .where(knex.raw('id = ?', [1]))
        .toSQL();

    const count = await knex('users').count('* as total');
    console.log(count[0].total, typeof count[0].total);

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
