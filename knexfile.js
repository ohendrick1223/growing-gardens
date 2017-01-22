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
    // connection: {
    //   host: process.env.DB_HOST,
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    // }
    connection: process.env.CLEARDB_DATABASE_URL;
  }

};
