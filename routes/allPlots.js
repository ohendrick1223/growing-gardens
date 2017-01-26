'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('produce_plots')
    .join('produce', 'produce_plots.produce_id', 'produce.id')
    .then(results => {
      var produceObj = {};
      for (var i = 0; i < results.length; i++) {
        if (produceObj[results[i].produce_name]) {
          produceObj[results[i].produce_name].total_amount = produceObj[results[i].produce_name].total_amount + 1;
          produceObj[results[i].produce_name].image_url = results[i].produce_image_url;
          produceObj[results[i].produce_name].name = results[i].produce_name;
        } else {
          produceObj[results[i].produce_name] = {
            total_amount: 1,
            image_url: results[i].produce_image_url,
            name: results[i].produce_name
          };
        }
      }
      res.send(produceObj);
    })
    .catch(err => {
      next(err);
    });
})



module.exports = router;
