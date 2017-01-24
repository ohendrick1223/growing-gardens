'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

router.post('/', (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  bcrypt.hash(password, 10).then(hashed_password => {
      const newUser = { first_name, last_name, email, hashed_password };
      return knex('users')
        .insert(newUser, '*')
        .then(success => {
          return knex('users')
            .where('users.id', success[0])
            .then(result => {
              return res.status(200).send(result);
            })
            .catch(err => {
              next(err);
            });
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
