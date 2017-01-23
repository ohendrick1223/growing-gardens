'use strict';

// admin passwords: first_nameadmin12
// example: mattadmin12
// not-admin pass: first_namenotadmin12
// example: joenotadmin12

const passwords = {
  oliviar: '$2a$10$Q2mR7lA32574PI87lt99suVfs5dBDRj1ubjYh0Cb0bo98fQf1lH3W',
  oliviah: '$2a$10$Q2mR7lA32574PI87lt99suVfs5dBDRj1ubjYh0Cb0bo98fQf1lH3W',
  matt: '$2a$10$AHe271/jukkvFmbSU.pmmuf9XjuECQq0h4IwQzSoagkWFZLvyzWxe',
  brad: '$2a$10$6ut9cMi74cYH3nACfopVkePWArfr50/UNTb9Fi1uyfA8A52FMuT62',
  anna: '$2a$10$HMQhG9ikuNLVKDvkI1QlSuBBLxsfpqr1q.2/Fd/.q71DyhYIDPYu6',
  joe: '$2a$10$Lj/9vBo5pDxTxbdm.8ijsOxTPA6gRCR11hRgRfe95dWd.Q1DGO7.u'
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
    .then(() => knex.raw("ALTER TABLE users AUTO_INCREMENT = 1"));
};
