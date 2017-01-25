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
          posts_name: 'Gary Goodman',
          description: 'I need seven shovels, to help plant my first Japanese Eggplant Patch this spring. Can anyone help out with that? Thank you.',
          contact: '303 214 8772',
          posts_image_url: '../../assets/images/eggplant:shovels.jpg',
          user_id: 1,
          want: true
        }),
        knex('posts').insert({
          id: 2,
          category: 'seeds',
          posts_name: 'Deeandra Reynolds',
          description: 'Hey there, I have got a bunch of leftover seeds from the tomato yield, any takers?',
          contact: 'deandra@philly.com',
          posts_image_url: '../../assets/images/weedinghelp.jpg',
          user_id: 2,
          want: fals
        }),
        knex('posts').insert({
          id: 3,
          category: 'help',
          posts_name: 'Mary Berry',
          description: 'I need a couple extra hands in my garden, for the next four Saturdays. Does anyone have time to help me do some weeding?',
          contact: '303 792 4655',
          posts_image_url: '../../assets/images/tomatoseeds.jpg',
          user_id: 3,
          want: true
        }),
        knex('posts').insert({
          id: 4,
          category: 'food',
          posts_name: 'Annabel Porter',
          description: 'I have way too much kale, please take it off of my hands, seriously, too much kale. Please send help.',
          contact: 'blooshlifestyle@gmail.com',
          posts_image_url: '../../assets/images/toomuchkale.jpg',
          user_id: 4,
          want: false
        }),
        knex('posts').insert({
          id: 5,
          category: 'miscellaneous',
          posts_name: 'Linda B Johnson',
          description: 'I would love a ride to the Hawthorne Garden, I currently live in Longmont, is anyone heading that way Tuesday morning?',
          contact: '720 652 6697',
          posts_image_url: '../../assets/images/farmerlongmont.jpg',
          user_id: 5,
          want: false
        }),
      ]);
    })
    .then(() => knex.raw("ALTER TABLE posts AUTO_INCREMENT = 1"));
};
