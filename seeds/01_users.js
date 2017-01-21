'use strict';

const passwords = {
  oliviar: '$2a$10$jmlExI3OgRQOPFNYQp6uEuyLeQ2sM17RJRLgWG/ovgQrkLdUwa5ZG',
  oliviah: '$2a$10$kQR7XjvDiKDE/B.y8uzTaO1wuY9tIRltCkbt5rU9niqFPYmXlpcvW',
  matt: '$2a$10$PE90ZfZDnuZQeMnYA5gguu9UNrw/X1D1v.tHBAfBKgzRPLlttsVVm',
  brad: '$2a$10$zez.y0a3nLo6VtILaDrMQu0hdkGIQiydmWTsLs/k79L5CRn2V6TMK',
  anna: '$2a$10$d21mfPupJAG5mVJzXxMs9eg1SWKJWJG/Eeiy1D0kQvMTOf.fRQYdO'
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
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Olivia',
          last_name: 'Hendrick',
          email: 'olivia.hendrick@gmail.com',
          hashed_password: passwords.oliviah,
        }),
        knex('users').insert({
          id: 3,
          first_name: 'Matt',
          last_name: 'Lindly',
          email: 'matt.lindly@gmail.com',
          hashed_password: passwords.matt,
        }),
        knex('users').insert({
          id: 4,
          first_name: 'Brad',
          last_name: 'Chapin',
          email: 'brad.chapin@gmail.com',
          hashed_password: passwords.brad,
        }),
        knex('users').insert({
          id: 5,
          first_name: 'Anna',
          last_name: 'Lotko',
          email: 'anna.lotko@gmail.com',
          hashed_password: passwords.anna,
        }),
      ]);
    })
    .then(() => knex.raw("ALTER TABLE plots AUTO_INCREMENT = 1"));
};
