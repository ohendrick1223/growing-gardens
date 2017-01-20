'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('plots').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('plots').insert({
          id: 1,
          username: 'Larry',
          farm: 'Hawthorne Garden',
          image_url: 'http://vignette4.wikia.nocookie.net/voiceacting/images/2/23/Larry_King.jpg/revision/latest?cb=20140626195112',
          about: 'I raised all five of my kids on organic produce.'
        }),
        knex('plots').insert({
          id: 2,
          username: 'Farmer Joe',
          farm: 'Alta Park',
          image_url: 'http://vignette4.wikia.nocookie.net/voiceacting/images/2/23/Larry_King.jpg/revision/latest?cb=20140626195112',
          about: 'I love me some crocs. They are great gardening shoes, and you can eat them in desperate situations.'
        }),
        knex('plots').insert({
          id: 3,
          username: 'The Papa John Family',
          farm: "Roger's Grove Garden",
          image_url: 'http://vignette4.wikia.nocookie.net/voiceacting/images/2/23/Larry_King.jpg/revision/latest?cb=20140626195112',
          about: 'We are a family of potato eaters, and we are a bunch of spuds.'
        }),
        knex('plots').insert({
          id: 4,
          username: 'Mrs. Peppercorn',
          farm: 'Fortune Garden',
          image_url: 'http://vignette4.wikia.nocookie.net/voiceacting/images/2/23/Larry_King.jpg/revision/latest?cb=20140626195112',
          about: 'I retired five years ago and now I spend all my time growing peppercorns and other deliteful things.'
        }),
        knex('plots').insert({
          id: 5,
          username: 'Teddi Maull',
          farm: 'Holiday Garden',
          image_url: 'https://avatars0.githubusercontent.com/u/10150127?v=3&s=460',
          about: 'Sometimes I code, and sometimes I grow spicy things.'
        })
      ]);
    })
    .then(() => knex.raw("ALTER TABLE plots AUTO_INCREMENT = 1"));
};
