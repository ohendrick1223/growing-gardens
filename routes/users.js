'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

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

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
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
});

router.post('/', (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  bcrypt.hash(password, 10).then(hashed_password => {
      const newUser = { first_name, last_name, email, hashed_password };
      knex('users')
        .insert(newUser, '*')
        .then(success => {
          knex('users')
            .where('users.id', success[0])
            .then(result => {
              res.status(200).send(result);
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

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  const { first_name, last_name, email, password } = req.body;
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
