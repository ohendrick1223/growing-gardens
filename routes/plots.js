'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

// Gets all the plots.
router.get('/', (req, res, next) => {
  knex('plots')
    .then(results => {
      if (results.length === 0) {
        return res.send(404);
      }
      res.status(200).send(results)
    })
    .catch(error => {
      return next(error)
    })
});

// Gets a specific plot by Plot ID.
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  knex('plots')
    .where('plots.id', id)
    .first()
    .then(result => {
      if (result) {
        return res.status(200).send(result)
      }
      return res.send(404);
    })
    .catch(error => {
      return next(error)
    })
});

// Update specific plot
router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  knex('plots')
    .where('plots.id', id)
    .first()
    .then(result => {
      if ((req.decoded.is_admin && result) || (result.user_id === req.decoded.user_id && result)) {
        return knex('plots')
          .update({ farm: req.body.farm, plots_image_url: req.body.plots_image_url, about: req.body.about })
          .where('plots.id', id)
          .returning('*')
          .then(good => {
            return knex('plots')
              .where('plots.id', id)
              .first()
              .then(result => {
                res.status(200).send(result);
              })
              .catch(err => {
                next(err);
              });
          })
          .catch(error => {
            return next(error)
          });
      } else {
        return res.status(401).send({
          success: false,
          message: 'Unauthorized.'
        });
      }
    })
});

// Create new plot
router.post('/', (req, res, next) => {
  knex('plots')
    .insert({ user_id: req.decoded.user_id, farm: req.body.farm, plots_image_url: req.body.plots_image_url, about: req.body.about })
    .returning('*')
    .then(result => {
      res.status(200).send(result)
    })
    .catch(error => {
      return next(error)
    })
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

// Delete plot by id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  knex('plots')
    .where('plots.id', id)
    .del()
    .then(result => {
      return res.send(200)
    })
    .catch(error => {
      return next(error)
    })
})

module.exports = router;
