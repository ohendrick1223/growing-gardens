'use strict';

exports.seed = function (knex, Promise) {

  // Build random data sets
  let centennial = [];
  let foothills = [];
  let eleventh = [];

  for (let i = 1; i <= 22; i++) {
    // populate centennial
    let numOfProduce = generateRandomProduce(1, 6);
    for (let j = 0; j < numOfProduce; j++) {
      let newObj = {
        plot_id: i,
        produce_id: generateRandomProduce(1, 59)
      };
      centennial.push(newObj);
    }
  }

  for (let i = 209; i <= 254; i++) {
    // populate foothills
    let numOfProduce = generateRandomProduce(1, 6);
    for (let j = 0; j < numOfProduce; j++) {
      let newObj = {
        plot_id: i,
        produce_id: generateRandomProduce(1, 59)
      };
      foothills.push(newObj);
    }
  }

  for (let i = 283; i <= 318; i++) {
    // populate eleventh
    let numOfProduce = generateRandomProduce(1, 6);
    for (let j = 0; j < numOfProduce; j++) {
      let newObj = {
        plot_id: i,
        produce_id: generateRandomProduce(1, 59)
      };
      eleventh.push(newObj);
    }
  }

  // produce range is 1 - 59
  function generateRandomProduce(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
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
