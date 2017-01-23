'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

function confirmUsersProducePlots(id) {
  return knex('produce_plots')
    .join('plots', 'produce_plots.plot_id', 'plots.id')
    .join('produce', 'produce_plots.produce_id', 'prodice.id')
    .where('produce_plots.id', id)
    .first();
}

router.get('/', (req, res, next) => {
  knex('produce_plots')
    .join('produce', 'produce_plots.produce_id', 'produce.id')
    .join('plots', 'produce_plots.plot_id', 'plots.id')
    .then(results => {
      delete results.user_id;
      delete results.about;
      delete results.image_url;
      res.send(results);
    })
    .catch(err => {
      next(err);
    });
})

router.use((req, res, next) => {
  console.log(req.cookies);
  // decode token
  if (req.cookies.token) {
    console.log('here?');
    next();
  } else {
    // if there is no token
    // return an error
    return res.status(401).send({
      success: false,
      message: 'Not logged in.'
    });
  }
});

router.get('/:id', (req, res, next) => {
  console.log('here i am');
  const id = req.params.id;
  const userId = req.decoded.user_id;
  console.log('i am in here');
  knex('produce_plots')
    .join('produce', 'produce_plots.produce_id', 'produce.id')
    .join('plots', 'produce_plots.plot_id', 'plots.id')
    .join('users', 'plots.user_id', 'users.id')
    .where('plots.id', id)
    .first()
    .then(result => {
      if (!result) {
        return res.send(404);
      }
      delete result.hashed_password;
      delete result.email;
      return res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const { produce_id, plot_id } = req.body;
  const newUserProduce = { produce_id, plot_id };

  knex('produce_plots')
    .insert(newUserProduce, '*')
    .then(result => {
      return knex('produce_plots')
        .join('produce', 'produce_plots.produce_id', 'produce.id')
        .join('plots', 'plots.id', 'produce_plots.plot_id')
        .where('plots.id', newUserProduce.plot_id)
        .then(results => {
          if (results.length === 0) {
            return res.send(404);
          }
          for (let i = 0; i < results.length; i++) {
            delete results[i].id;
            delete results[i].created_at;
            delete results[i].updated_at;
            delete results[i].user_id;
            delete results[i].farm;
            delete results[i].about;
            delete results[i].image_url;
          }
          return res.status(200).send(results);
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
  const userId = req.decoded.user_id;
  const updatedProduce = { produce_id: req.body.produce_id, plot_id: req.body.plot_id };

  confirmUsersProducePlots(id).then(result => {
    if ((req.decoded.is_admin && result) || (result.user_id === req.decoded.user_id && result)) {
      return knex('produce_plots')
        .update(updatedProduce, '*')
        .then(result => {
          confirmUsersProducePlots(id).then(result => {
            delete result.id;
            delete result.created_at;
            delete result.updated_at;
            delete result.user_id;
            delete result.farm;
            delete result.about;
            delete result.image_url;
            return res.status(200).send(result)
          })
        })
        .catch(err => {
          next(err);
        });
    } else {
      return res.status(401).send({
        success: false,
        message: 'Unauthorized attempt.'
      });
    }
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  const userId = req.decoded.user_id;

  knex('produce_plots')
    .join('plots', 'plots.id', 'produce_plots.plot_id')
    .first()
    .then(result => {
      if ((req.decoded.is_admin && result) || (result.user_id === req.decoded.user_id && result)) {
        return knex("produce_plots")
          .where("produce_plots.id", id)
          .del()
          .then(result => {
            res.send(200);
          })
          .catch(err => {
            next(err);
          });
      } else {
        return res.status(401).send({
          success: false,
          message: 'Unauthorized attempt.'
        });
      }
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
