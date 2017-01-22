'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');

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
  if (!req.cookies.token) {
    knex('users')
      .where('users.email', email)
      .first()
      .then(user => {
        if (!user) {
          return res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else {
          bcrypt.compare(password, user.hashed_password)
            .then(result => {
              // if user is found and password is right
              const token = jwt.sign({ user_id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email, is_admin: user.is_admin }, process.env.JWT_SECRET, { expiresIn: '24h' });
              res.cookie('token', token, { httpOnly: true });
              res.cookie('userInfo', { first_name: user.first_name, last_name: user.last_name, email: user.email });
              res.setHeader('Authorization', token);
              // return the information including token as JSON
              return res.send({
                success: true,
                message: 'Enjoy your token!',
                token: token
              });
            })
            .catch(bcrypt.MISMATCH_ERROR, () => {
              return res.json({ success: false, message: 'Authentication failed. User not found.' });
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
  res.clearCookie('token');
  res.send({
    redirectTo: '/index.html'
  });
});

module.exports = router;
