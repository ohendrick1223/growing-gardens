'use strict';

exports.seed = function (knex, Promise) {


// 7 farms
  let farms = [
    'centennial_garden',
    'eleventh_garden',
    'foothills_garden',
    'hawthorn_garden',
    'hope_garden',
    'kerr_garden',
    'living_harvest_garden'
  ];

// 19 seed images
  let plots_image_urls = [
    '/assets/images/plot_pics/plot__0000.png',
    '/assets/images/plot_pics/plot__0001.png',
    '/assets/images/plot_pics/plot__0002.png',
    '/assets/images/plot_pics/plot__0003.png',
    '/assets/images/plot_pics/plot__0004.png',
    '/assets/images/plot_pics/plot__0005.png',
    '/assets/images/plot_pics/plot__0006.png',
    '/assets/images/plot_pics/plot__0007.png',
    '/assets/images/plot_pics/plot__0008.png',
    '/assets/images/plot_pics/plot__0009.png',
    '/assets/images/plot_pics/plot__0010.png',
    '/assets/images/plot_pics/plot__0011.png',
    '/assets/images/plot_pics/plot__0012.png',
    '/assets/images/plot_pics/plot__0013.png',
    '/assets/images/plot_pics/plot__0014.png',
    '/assets/images/plot_pics/plot__0015.png',
    '/assets/images/plot_pics/plot__0016.png',
    '/assets/images/plot_pics/plot__0017.png',
    '/assets/images/plot_pics/plot__0018.png'
  ];

  // 15 people
  let plots_names = [
    'The Gooseberry Family',
    'Mrs. Jays 3rd Grade Class',
    'The Tomato Heads',
    'Mat Brown',
    'Anna Lotko',
    'Olivia Hendrick',
    'Olivia Ridgley',
    'Brad Chapin',
    'Teddi Maull',
    'John Papa',
    'The Orange Family',
    'Jay and John',
    'Julie Vim',
    'The Pinkertons',
    'Master Gardener'
  ]

// 15
  let abouts = [
    'I raised all five of my kids on organic produce.',
    'We are a family of potato eaters, and we are a bunch of spuds.',
    'I retired five years ago and now I spend all my time growing peppercorns and other deliteful things.',
    'So excited to have a garden to fulfill my salsa cravings.',
    'Who said you could not grow starfruit in Colorado?',
    'Community gardening with a cherry on top!',
    'I am here to become the best gardener, and nobody will stop me.',
    'I need some inspiration, so I planted a garden.',
    'Planting my roots in Colorado!',
    'I just love gardening, so I got a community garden.',
    'I am bananas for growing gardens!',
    'It is a small plot of land but I grow many organic vegetables.',
    'We grow varieties of edible flowers. The bees love us!',
    'I just love it here in the garden with the smell of organic soil!',
    'It is a garden party over here! Peaches for everyone!'
  ]
  //user id's between 1 - 5

  let plotData = [];

  // centennial_garden
  for (let i = 1; i <= 22; i++) {
    let newPlot = {
      id: i,
      user_id: getRandomIntInclusive(1, 5),
      farm: 'centennial_garden',
      plots_image_url: plots_image_urls[getRandomIntInclusive(0, 18)],
      about: abouts[getRandomIntInclusive(0, 14)],
      plot_name: plots_names[getRandomIntInclusive(0, 14)]
    };
    plotData.push(newPlot);
  }

  // hawthorn_garden
  for (let i = 23; i <= 208; i++) {
    let newPlot = {
      id: i,
      user_id: getRandomIntInclusive(1, 5),
      farm: 'hawthorn_garden',
      plots_image_url: plots_image_urls[getRandomIntInclusive(0, 18)],
      about: abouts[getRandomIntInclusive(0, 14)],
      plot_name: plots_names[getRandomIntInclusive(0, 14)]
    };
    plotData.push(newPlot);
  }

  // foothills_garden
  for (let i = 209; i <= 254; i++) {
    let newPlot = {
      id: i,
      user_id: getRandomIntInclusive(1, 5),
      farm: 'foothills_garden',
      plots_image_url: plots_image_urls[getRandomIntInclusive(0, 18)],
      about: abouts[getRandomIntInclusive(0, 14)],
      plot_name: plots_names[getRandomIntInclusive(0, 14)]
    };
    plotData.push(newPlot);
  }

  // living_harvest_garden
  for (let i = 255; i <= 282; i++) {
    let newPlot = {
      id: i,
      user_id: getRandomIntInclusive(1, 5),
      farm: 'living_harvest_garden',
      plots_image_url: plots_image_urls[getRandomIntInclusive(0, 18)],
      about: abouts[getRandomIntInclusive(0, 14)],
      plot_name: plots_names[getRandomIntInclusive(0, 14)]
    };
    plotData.push(newPlot);
  }

  // eleventh_garden
  for (let i = 283; i <= 318; i++) {
    let newPlot = {
      id: i,
      user_id: getRandomIntInclusive(1, 5),
      farm: 'eleventh_garden',
      plots_image_url: plots_image_urls[getRandomIntInclusive(0, 18)],
      about: abouts[getRandomIntInclusive(0, 14)],
      plot_name: plots_names[getRandomIntInclusive(0, 14)]
    };
    plotData.push(newPlot);
  }

  // hope_garden
  for (let i = 319; i <= 341; i++) {
    let newPlot = {
      id: i,
      user_id: getRandomIntInclusive(1, 5),
      farm: 'hope_garden',
      plots_image_url: plots_image_urls[getRandomIntInclusive(0, 18)],
      about: abouts[getRandomIntInclusive(0, 14)],
      plot_name: plots_names[getRandomIntInclusive(0, 14)]
    };
    plotData.push(newPlot);
  }

  // kerr_garden
  for (let i = 342; i <= 391; i++) {
    let newPlot = {
      id: i,
      user_id: getRandomIntInclusive(1, 5),
      farm: 'kerr_garden',
      plots_image_url: plots_image_urls[getRandomIntInclusive(0, 18)],
      about: abouts[getRandomIntInclusive(0, 14)],
      plot_name: plots_names[getRandomIntInclusive(0, 14)]
    };
    plotData.push(newPlot);
  }




  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Deletes ALL existing entries
  return knex('plots').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries

        knex.insert(plotData).into('plots')
      ]);
    })
    // .then(() => knex.raw("ALTER TABLE plots AUTO_INCREMENT = 1"));
};
