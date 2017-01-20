'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const knex = require('knex');
const path = require('path');
const bodyParser = require('body-parser');
// require('dotenv').config();

app.disable('x-powered-by');
app.use(express.static(path.join('public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Specify node modules, and the public folder.
app.use(express.static('public'));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/angular', express.static('node_modules/angular'));
app.use('/angular-ui-router', express.static('node_modules/angular-ui-router/release'));
app.use('/font-awesome', express.static('node_modules/font-awesome'));

// Require the routes and define them here.
const produce = require('./routes/produce');
const plots = require('./routes/plots');
const posts = require('./routes/posts');

// Use the routes to navigate throughout the requests.
app.use('/produce', produce);
app.use('/plots', plots);
app.use('/posts', posts);

// Error Functions Handling
app.use((_req, res) => {
  res.status(404).redirect('/404.html').send();
});

// Wildcard Route, Sends the Index back incase of someone being where they shouldn't.
app.use('*', function (req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

// Straight up, error handling. Not just 404 specific.
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

// App listener, just specifies port and the creation of the listener on that port.
app.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = app;
