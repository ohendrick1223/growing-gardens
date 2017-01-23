'use strict';

// admin passwords: first_nameadmin12
// example: mattadmin12
// not-admin pass: first_namenotadmin12
// example: joenotadmin12
// const bcrypt = require('bcrypt');
//
// bcrypt.hash('mattadmin12', 10).then(result => console.log(result));
// bcrypt.hash('annaadmin12', 10).then(result => console.log(result));
// bcrypt.hash('bradadmin12', 10).then(result => console.log(result));
// bcrypt.hash('oliviaadmin12', 10).then(result => console.log(result));
// bcrypt.hash('joenotadmin12', 10).then(result => console.log(result));

const passwords = {
  matt: '$2a$10$7gtEhtfzxKrY48986GbJfOod6aDo4EtID2JP.RaLFEG2.9pgDefBy',
  anna: '$2a$10$10ACoj6uRVkXDDSh7I6QRu9nsNo8IW/LsUjfrN8onEF16RcN9CKCy',
  brad: '$2a$10$.ymoWzAOhIn.GrpXgnIc6ey7NtrLQUE44dOFtzaJbjJF6t7HKegde',
  olivia: '$2a$10$8dcm71ESfmDCmTaYZMBldO.j7h/qNfBYiifv/.MPxS/QbADdmcOii',
  joe: '$2a$10$TPlnELQg1afe8cDKPaVg1.Xek5Ur6LlxM4zcRm5MmGnZ7yXN.99Ra'
};

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          first_name: 'Olivia',
          last_name: 'Ridgley',
          email: 'olivia.ridgley@gmail.com',
          hashed_password: passwords.olivia,
          is_admin: true
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Olivia',
          last_name: 'Hendrick',
          email: 'olivia.hendrick@gmail.com',
          hashed_password: passwords.olivia,
          is_admin: true
        }),
        knex('users').insert({
          id: 3,
          first_name: 'Matt',
          last_name: 'Lindly',
          email: 'matt.lindly@gmail.com',
          hashed_password: passwords.matt,
          is_admin: true
        }),
        knex('users').insert({
          id: 4,
          first_name: 'Brad',
          last_name: 'Chapin',
          email: 'brad.chapin@gmail.com',
          hashed_password: passwords.brad,
          is_admin: true
        }),
        knex('users').insert({
          id: 5,
          first_name: 'Anna',
          last_name: 'Lotko',
          email: 'anna.lotko@gmail.com',
          hashed_password: passwords.anna,
          is_admin: true
        }),
        knex('users').insert({
          id: 6,
          first_name: 'Farmer',
          last_name: 'Joe',
          email: 'farmer.joe@gmail.com',
          hashed_password: passwords.joe,
          is_admin: false
        }),
      ]);
    })
    .then(() => knex.raw("ALTER TABLE users AUTO_INCREMENT = 1"));
};
