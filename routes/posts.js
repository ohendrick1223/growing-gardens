'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('posts')
    .then(results => {
      if (results.length === 0) {
        return res.send(404);
      }
      return res.status(200).send(results);
    })
    .catch(err => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('posts')
    .where('posts.id', id)
    .first()
    .then(result => {
      if (!result) {
        return res.send(404);
      }
      return res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  // Object deconstruction to grab same words from the request body.
  const { category, description, contact, user_id, want } = req.body;
  // Creates the newPost object, leaving out what does not exist.
  const newPost = { category, description, contact, user_id, want };
  knex('posts')
    .insert(newPost)
    .then(result => {
      res.status(200).send(newPost);
    })
    .catch(err => {
      next(err);
    });
});

router.patch('/:id', (req, res, next) => {
  // Creates the ID of the post that will be manipulated.
  const id = req.params.id;
  // Object deconstruction to grab same words from the request body.
  const { category, description, contact, user_id, want } = req.body;
  // Creates the updated object, leaving out what does not exist.
  const updatedPost = { category, description, contact, user_id, want };
  knex('posts')
    .where('posts.id', id)
    .update(updatedPost, '*')
    .then(success => {
      return knex('posts')
        .where('posts.id', id)
        .first()
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
});

router.delete('/:id', (req, res, next) => {
  // Creates the ID of the post that will be deleted.
  const id = req.params.id;
  // Deletes it.
  knex('posts')
    .where('posts.id', id)
    .del()
    .then(result => {
      res.send(200);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
