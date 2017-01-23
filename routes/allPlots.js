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

module.exports = router;
