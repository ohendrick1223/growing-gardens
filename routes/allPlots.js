'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('produce_plots')
    .join('produce', 'produce_plots.produce_id', 'produce.id')
    .then(results => {
      let counts = {};
      results.map(x => {
        counts[x.produce_name] = {
          total_amount: (counts[x.produce_name].total_amount || 0) + 1,
          produce_image_url: x.produce_image_url
        }
      });
      let produceNodeArr = [];
      for (var prop in counts) {
        // let name = prop;
        let produceObj = {
          name: prop,
          total_amount: counts[prop]
        }
        produceNodeArr.push(produceObj);
      }
      res.send(produceNodeArr);
    })
    .catch(err => {
      next(err);
    });
})



module.exports = router;
