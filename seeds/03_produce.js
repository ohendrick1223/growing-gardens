'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('produce').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('produce').insert({
          id: 1,
          produce_name: 'Green Beans',
          //produce_image_url:
        }),
        knex('produce').insert({
          id: 2,
          produce_name: 'Carrots',
          produce_image_url: '../../assets/icons/carrot_icon.svg'
        }),
        knex('produce').insert({
          id: 3,
          produce_name: 'Potatoes',
          produce_image_url: '../../assets/icons/potato_icon.svg'
        }),
        knex('produce').insert({
          id: 4,
          produce_name: 'Asparagus',
          produce_image_url: '../../assets/icons/asparagus_icon.svg'
        }),
        knex('produce').insert({
          id: 5,
          produce_name: 'Chinese Eggplant',
          produce_image_url: '../../assets/icons/eggplant_icon.svg'
        }),
      ]);
    })
    .then(() => knex.raw("ALTER TABLE produce AUTO_INCREMENT = 1"));
};
