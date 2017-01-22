'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

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

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const userId = req.decoded.user_id;

  knex('produce_plots')
    .join('produce', 'produce_plots.produce_id', 'produce.id')
    .join('plots', 'produce_plots.plot_id', 'plots.id')
    .join('users', 'plots.user_id', 'users.id')
    .first()
    .then(result => {
      if(!result) {
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
          if(results.length === 0) {
            return res.send(404);
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



//join route which produce(s) is associated with a user's individual plot.
//gives us d3 vis for the food section (How many carrots were grown across all gardens? etc)
//many to many relationship
//Get request to read all produce by plot id
// router.get('/:id', (req, res, next) => {
//   const id = req.params.id;
//   knex('produce_plots')
//   .where('plots_id', id)
//   .then(result => {
//     if (!result) {
//       return res.send(404);
//     }
//     return res.status(200).send(results);
//     .then(results)
//   })
// }



module.exports = router;
