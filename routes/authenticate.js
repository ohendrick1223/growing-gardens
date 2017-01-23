'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

router.get('/', (req, res, next) => {
  // Tests if a Cookie exists, if not; send a false.
  jwt.verify((req.cookies.token), process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send(false);
    }

    res.status(200).send(true);
  });
});

router.post('/', function (req, res, next) {
  const { email, password } = req.body;
  console.log(email, password);
  if (!req.cookies.token) {
    knex('users')
      .where('users.email', email)
      .first()
      .then(user => {
        console.log('made it here 1');
        console.log(user);
        console.log('Hashed: ', user.hashed_password);
        console.log('Normal: ', password);
        if (!user) {
          return res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else {
          bcrypt.compare(password.toString(), user.hashed_password)
            .then(result => {
              console.log(result);
              console.log('made it here');
              // if user is found and password is right, create the token
              const token = jwt.sign({ user_id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email, is_admin: user.is_admin }, process.env.JWT_SECRET, { expiresIn: '24h' });
              // set the token into the cookies here.
              res.cookie('token', token, { httpOnly: true });
              // set the "authorization" header as a fail-safe for the token.
              res.setHeader('Authorization', token);
              // set the token in localStorage as a fail-safe for the token, if cookies are not accepted.
              localStorage.setItem('token', token);
              console.log('made it here 2');
              // return the information including token as JSON
              return res.send({
                success: true,
                message: 'Authentication successful, token received!',
                token: token
              });
            })
            .catch(bcrypt.MISMATCH_ERROR, () => {
              return res.json({ success: false, message: 'Authentication. User not found.' });
            })
            .catch(err => {
              return next(err);
            });
        }
      })
  } else {
    res.send(200);
  }
});

router.delete('/', (req, res, next) => {
  delete req.cookies.token;
  res.clearCookie('token');
  res.clearCookie('userInfo');
  res.send({
    redirectTo: '/index.html'
  });
});

module.exports = router;
