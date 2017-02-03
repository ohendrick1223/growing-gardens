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
};
