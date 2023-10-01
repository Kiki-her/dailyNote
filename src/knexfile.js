// Update with your config settings.
require("dotenv").config();

module.exports = { 
    development: {
      client: "postgresql",
      connection: process.env.DB_URL || {
        host : process.env.DB_HOST || "127.0.0.1",
        user : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
        charset: 'utf8'
      },
      migrations: {
        directory: '../db/migrations',
      },
      seeds: {
        directory: '../db/seeds'
      }
    },
  }