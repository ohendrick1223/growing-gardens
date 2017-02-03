// Update with your config settings.
'use strict';
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/growing_gardens_dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

  // development: {
  //   client: 'mysql',
  //   connection: {
  //     host: 'localhost',
  //     user: 'root',
  //     password: '',
  //     database: 'growing_gardens_dev'
  //   }
  // },
  //
  // production: {
  //   client: 'mysql',
  //   connection: 'mysql://b13910f57ab565:d0f6cd3e@us-cdbr-iron-east-04.cleardb.net/heroku_b53d242096e38d5?reconnect=true',
  //   // migrate: 'safe',
  //   pool: {
  //     max: 1,
  //     min: 0
  //   }
  //   // migrations: {
  //   //   directory: './migrations'
  //   // },
  //   // seeds: {
  //   //   directory: './seeds'
  //   // }
  // }
};
