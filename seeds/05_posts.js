'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          id: 1,
          category: 'tools',
          description: 'I need seven shovels, to help plant my first Japanese Eggplant Patch this spring. Can anyone help out with that? Thank you, Farmer Gary.',
          contact: '3032148772',
          user_id: 1,
          want: true
        }),
        knex('posts').insert({
          id: 2,
          category: 'seeds',
          description: 'Hey there, I have got a bunch of leftover seeds from the tomato yield, any takers?',
          contact: 'deandra@yamother.com',
          user_id: 2,
          want: false
        }),
        knex('posts').insert({
          id: 3,
          category: 'help',
          description: 'I need a couple extra hands in my garden, for the next four Saturdays. Does anyone have time to help me do some weeding?',
          contact: '3037924655',
          user_id: 3,
          want: true
        }),
        knex('posts').insert({
          id: 4,
          category: 'food',
          description: 'I have way too much kale, please take it off of my hands, seriously, too much kale. Please send help.',
          contact: 'blushelifestyle@gmail.com',
          user_id: 4,
          want: false
        }),
        knex('posts').insert({
          id: 5,
          category: 'miscellaneous',
          description: 'I would love a ride to the Hawthorne Garden, I currently live in Longmont, is anyone heading that way Tuesday morning?',
          contact: '7206526697',
          user_id: 5,
          want: false
        }),
      ]);
    })
    .then(() => knex.raw("ALTER TABLE posts AUTO_INCREMENT = 1"));
};
