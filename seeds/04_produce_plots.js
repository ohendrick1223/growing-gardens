'use strict';

exports.seed = function (knex, Promise) {

  // Build random data sets
  let centennial = [];
  let foothills = [];
  let eleventh = [];

  for (let i = 1; i <= 22; i++) {
    // populate centennial
    let newObj = {
      plot_id: i,
      produce_id: generateRandomProduce()
    };
    centennial.push(newObj);
  }

  for (let i = 209; i <= 254; i++) {
    // populate foothills
    let newObj = {
      plot_id: i,
      produce_id: generateRandomProduce(1)
    };
    foothills.push(newObj);
  }

  for (let i = 283; i <= 318; i++) {
    // populate eleventh
    let newObj = {
      plot_id: i,
      produce_id: generateRandomProduce()
    };
    eleventh.push(newObj);
  }

  // produce range is 1 - 59
  function generateRandomProduce() {
    let min = Math.ceil(1);
    let max = Math.floor(59);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Deletes ALL existing entries
  return knex('produce_plots').del()
    .then(function () {
      return Promise.all([
        knex.insert(centennial).into('produce_plots'),
        knex.insert(foothills).into('produce_plots'),
        knex.insert(eleventh).into('produce_plots')
      ]);
    })
    .then(() => knex.raw("ALTER TABLE produce_plots AUTO_INCREMENT = 1"));
};
