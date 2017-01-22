'use strict';

// admin passwords: first_nameadmin12
// example: mattadmin12
// not-admin pass: first_namenotadmin12
// example: joenotadmin12

const passwords = {
  oliviar: '$2a$10$jmlExI3OgRQOPFNYQp6uEuyLeQ2sM17RJRLgWG/ovgQrkLdUwa5ZG',
  oliviah: '$2a$10$kQR7XjvDiKDE/B.y8uzTaO1wuY9tIRltCkbt5rU9niqFPYmXlpcvW',
  matt: '$2a$10$PE90ZfZDnuZQeMnYA5gguu9UNrw/X1D1v.tHBAfBKgzRPLlttsVVm',
  brad: '$2a$10$zez.y0a3nLo6VtILaDrMQu0hdkGIQiydmWTsLs/k79L5CRn2V6TMK',
  anna: '$2a$10$d21mfPupJAG5mVJzXxMs9eg1SWKJWJG/Eeiy1D0kQvMTOf.fRQYdO',
  joe: '$2a$10$0d/8GnaMndhCxaB1y1KNOuTZ.o9xf0NDbVkTlLNVDawAQxpi/wZo2'
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
          hashed_password: passwords.oliviar,
          is_admin: true
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Olivia',
          last_name: 'Hendrick',
          email: 'olivia.hendrick@gmail.com',
          hashed_password: passwords.oliviah,
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
    .then(() => knex.raw("ALTER TABLE plots AUTO_INCREMENT = 1"));
};
