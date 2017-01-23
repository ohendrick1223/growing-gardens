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
    connection: {
      host: 'us-cdbr-iron-east-02.cleardb.net',
      user: 'b13910f57ab565',
      password: 'd0f6cd3e',
      database: 'heroku_b53d242096e38d5',
    }
  }
};


// module.exports = {
//
//   development: {
//     client: 'mysql',
//     connection: {
//       host: 'localhost',
//       user: 'annalotko',
//       password: 'pe2lantc',
//       database: 'growing_gardens_dev'
//     }
//   },
//
//   production: {
//     client: 'mysql',
//     connection: {
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//     }
//   }
//
// };
