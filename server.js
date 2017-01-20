'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const knex = require('knex');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

app.disable('x-powered-by');
app.use(express.static(path.join('public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Require the routes and define them here.


// Use the routes to navigate throughout the requests.

// Error Functions Handling
app.use((_req, res) => {
  res.status(404).redirect('/404.html').send();
});

app.use((err, _req, res, _next) => {
  console.log(err);
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  if (err.status) {
    console.log(err);
    return res.status(err.status).send(err);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = app;
