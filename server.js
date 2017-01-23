'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const knex = require('knex');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
var LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');
require('dotenv').config();

app.disable('x-powered-by');
app.use(express.static(path.join('public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

// Specify node modules, and the public folder.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/angular', express.static('node_modules/angular'));
app.use('/angular-ui-router', express.static('node_modules/angular-ui-router/release'));
app.use('/font-awesome', express.static('node_modules/font-awesome'));
app.use('/uib-modal', express.static('node_modules/angular-ui-router-uib-modal/'));

// Require the authentication route and define it here.
const authenticate = require('./routes/authenticate');
const users = require('./routes/users');
const producePlots = require('./routes/producePlots');

// Authenticate the User
app.use('/api/authenticate', authenticate);
app.use('/api/users', users);
app.use('/api/producePlots', producePlots);

app.use((req, res, next) => {
  // check header, cookies or localStorage for the token.
  var token = req.cookies.token || localStorage.getItem('token') || req.headers['authorization'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to confirm the token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(401).send({
      success: false,
      message: 'Unauthorized.'
    });
  }
});

// Get all of the other routes.
const produce = require('./routes/produce');
const plots = require('./routes/plots');
const posts = require('./routes/posts');

// Use the routes to navigate throughout the requests.
app.use('/api/produce', produce);
app.use('/api/plots', plots);
app.use('/api/posts', posts);

// Wildcard Route, Sends the Index back incase of someone being where they shouldn't.
app.use('*', function (req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

// Straight up, error handling. Not just 404 specific.
app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  if (err.status) {
    return res.status(err.status).send(err);
  }

  res.sendStatus(500);
});

// App listener, just specifies port and the creation of the listener on that port.
app.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = app;
