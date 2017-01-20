'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('produce').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('produce').insert({
          id: 1,
          name: 'Green Beans'
        }),
        knex('produce').insert({
          id: 2,
          name: 'Carrots'
        }),
        knex('produce').insert({
          id: 3,
          name: 'Potatoes'
        }),
        knex('produce').insert({
          id: 4,
          name: 'Asparagus'
        }),
        knex('produce').insert({
          id: 5,
          name: 'Chinese Eggplant'
        }),
      ]);
    })
    .then(() => knex.raw("ALTER TABLE produce AUTO_INCREMENT = 1"));
};
