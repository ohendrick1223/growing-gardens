// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'growing_gardens_dev'
    }
  },

  production: {
    client: 'mysql',
    connection: 'mysql://b13910f57ab565:d0f6cd3e@us-cdbr-iron-east-04.cleardb.net/heroku_b53d242096e38d5?reconnect=true',
    migrate: 'safe',
    pool: {
      min: 0,
      max: 7
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
