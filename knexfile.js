// Update with your config settings.
require("dotenv").config({
  path: "./.env.local",
});
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = { 
    development: {
      client: 'pg',
      connection: process.env.DB_URL || {
        host : process.env.DB_HOST || "127.0.0.1",
        user : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
        charset: 'utf8'
      },
      migrations: {
        directory: '/db/migrations',
      },
      seeds: {
        directory: '/db/seeds'
      }
    },
  }

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
