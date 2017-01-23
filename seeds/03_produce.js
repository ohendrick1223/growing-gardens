'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('produce').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('produce').insert({
          id: 1,
          produce_name: 'Green Beans'
        }),
        knex('produce').insert({
          id: 2,
          produce_name: 'Carrots'
        }),
        knex('produce').insert({
          id: 3,
          produce_name: 'Potatoes'
        }),
        knex('produce').insert({
          id: 4,
          produce_name: 'Asparagus'
        }),
        knex('produce').insert({
          id: 5,
          produce_name: 'Chinese Eggplant'
        }),
      ]);
    })
    .then(() => knex.raw("ALTER TABLE produce AUTO_INCREMENT = 1"));
};
