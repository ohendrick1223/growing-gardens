'use strict';

exports.seed = function (knex, Promise) {

  // Build random data sets
  let centennial = [];
  let hawthorn = [];
  let foothills = [];
  let living_harvest = [];
  let eleventh = [];
  let hope = [];
  let kerr = [];


  for (let i = 1; i <= 22; i++) {
    // populate centennial
    let numOfProduce = getRandomIntInclusive(1, 6);
    for (let j = 0; j < numOfProduce; j++) {
      let newObj = {
        plot_id: i,
        produce_id: getRandomIntInclusive(1, 59)
      };
      centennial.push(newObj);
    }
  }

  // hawthorn
  for (let i = 23; i <= 208; i++) {
    // populate centennial
    let numOfProduce = getRandomIntInclusive(1, 6);
    for (let j = 0; j < numOfProduce; j++) {
      let newObj = {
        plot_id: i,
        produce_id: getProduceWeighted()
      };
      hawthorn.push(newObj);
    }
  }

  // foothills
  for (let i = 209; i <= 254; i++) {
    // populate foothills
    let numOfProduce = getRandomIntInclusive(1, 6);
    for (let j = 0; j < numOfProduce; j++) {
      let newObj = {
        plot_id: i,
        produce_id: getProduceWeighted()
      };
      foothills.push(newObj);
    }
  }

  // living harvest
  for (let i = 255; i <= 282; i++) {
    // populate foothills
    let numOfProduce = getRandomIntInclusive(1, 6);
    for (let j = 0; j < numOfProduce; j++) {
      let newObj = {
        plot_id: i,
        produce_id: getProduceWeighted()
      };
      living_harvest.push(newObj);
    }
  }

  // eleventh
  for (let i = 283; i <= 318; i++) {
    let numOfProduce = getRandomIntInclusive(1, 6);
    for (let j = 0; j < numOfProduce; j++) {
      let newObj = {
        plot_id: i,
        produce_id: getProduceWeighted()
      };
      eleventh.push(newObj);
    }
  }

  // hope
  for (let i = 319; i <= 341; i++) {
    let numOfProduce = getRandomIntInclusive(1, 6);
    for (let j = 0; j < numOfProduce; j++) {
      let newObj = {
        plot_id: i,
        produce_id: getProduceWeighted()
      };
      hope.push(newObj);
    }
  }

  // kerr
  for (let i = 342; i <= 391; i++) {
    let numOfProduce = getRandomIntInclusive(1, 6);
    for (let j = 0; j < numOfProduce; j++) {
      let newObj = {
        plot_id: i,
        produce_id: getProduceWeighted()
      };
      kerr.push(newObj);
    }
  }

  function getProduceWeighted() {
    let val = getRandomIntInclusive(1, 59);
    if (val + 15 > 59 || val - 15 < 1) {
      return val;
    } else {
      let evenOrOdd = val%2;
      if (evenOrOdd === 1) {
        val = val+15;
      } else {
        val = val-15;
      }
    }
    let evenOrOdd = val%2;
    if (evenOrOdd === 1) {
      val = getRandomIntInclusive(1, 10);
    }
    return val;
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Deletes ALL existing entries
  return knex('produce_plots').del()
    .then(function () {
      return Promise.all([
        knex.insert(centennial).into('produce_plots'),
        knex.insert(hawthorn).into('produce_plots'),
        knex.insert(foothills).into('produce_plots'),
        knex.insert(living_harvest).into('produce_plots'),
        knex.insert(eleventh).into('produce_plots'),
        knex.insert(hope).into('produce_plots'),
        knex.insert(kerr).into('produce_plots')
      ]);
    })
    .then(() => knex.raw("ALTER TABLE produce_plots AUTO_INCREMENT = 1"));
};
