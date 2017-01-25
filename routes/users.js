'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (id === req.decoded.user_id || req.decoded.is_admin) {
    knex('users')
      .where('user.id', id)
      .first()
      .then(result => {
        if (result) {
          return res.status(200).send(result);
        }
        return res.send(404);
      })
      .catch(error => {
        next(error);
      });
  } else {
    return res.status(401).send({
      success: false,
      message: 'Unauthorized.'
    });
  }
});

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  const { first_name, last_name, email, password } = req.body;
  if (id === req.decoded.user_id || req.decoded.is_admin) {
    if (password) {
      bcrypt.hash(password, 10).then(hashed_password => {
        const updatedUser = { first_name, last_name, email, hashed_password };
        return knex('users')
          .where('user.id', id)
          .update(updatedUser, '*')
          .then(success => {
            return res.status(200).send(updatedUser);
          })
          .catch(err => {
            next(err);
          });
      });
    } else {
      const updatedUser = { first_name, last_name, email };
      return knex('users')
        .where('user.id', id)
        .update(updatedUser)
        .then(success => {
          return res.status(200).send(updatedUser);
        })
        .catch(err => {
          next(err);
        });
    }
  } else {
    return res.status(401).send({
      success: false,
      message: 'Unauthorized.'
    });
  }
});

router.use((req, res, next) => {
  // decode token
  if (req.decoded.is_admin) {
    next();
  } else {
    // if there is no token
    // return an error
    return res.status(401).send({
      success: false,
      message: 'Unauthorized.'
    });
  }
});

router.get('/', (req, res, next) => {
  knex('users')
    .then(results => {
      if (results.length === 0) {
        return res.send(404);
      }
      res.status(200).send(results);
    })
    .catch(error => {
      return next(error);
    });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  knex('users')
    .del()
    .where('users.id', id)
    .then(success => {
      res.send(200);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
