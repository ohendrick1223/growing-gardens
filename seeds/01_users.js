'use strict';

// admin passwords: first_nameadmin12
// example: mattadmin12
// not-admin pass: first_namenotadmin12
// example: joenotadmin12

const passwords = {
  matt: '$2a$10$v1MyJqVDcL2vsaRamBnWhOIXqVCiMHEhm7iTU7kn4Zo20wPWrwAbO',
  anna: '$2a$10$cRDKRqkthYrhfgFhnJYrDOKqLonWzDXxI/yDa8LhjFfA16e3R6zw.',
  brad: '$2a$10$fXMuifQpOdVNrBs38XXCLeIH1rXo/Vp2Ld.ilmNPNqV3yna/Q5SQy',
  olivia: '$2a$10$z0msOiwycxpAk31SzST90.HMC2xUDBkIsyVFRA5DTUI/FIei23oT6',
  joe: '$2a$10$QapDlDcomHXOdr.lR1Ydre95uIlfBXf48LHwYGZPfVtuV3yTvBxYG'
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
