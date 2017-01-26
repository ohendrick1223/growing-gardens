'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('plots').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('plots').insert({
          id: 1,
          user_id: 1,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0000.png',
          about: 'I raised all five of my kids on organic produce.',
          plot_name: 'The Gooseberry Family'
        }),
        knex('plots').insert({
          id: 2,
          user_id: 2,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0001.png',
          about: 'I love me some crocs. They are great gardening shoes, and you can eat them in desperate situations.',
          plot_name: 'Anna Lotko'
        }),
        knex('plots').insert({
          id: 3,
          user_id: 3,
          farm: "centennial_garden",
          plots_image_url: '/assets/images/plot_pics/plot__0002.png',
          about: 'We are a family of potato eaters, and we are a bunch of spuds.',
          plot_name: 'Mrs. Jays 3rd Grade Class'
        }),
        knex('plots').insert({
          id: 4,
          user_id: 4,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'I retired five years ago and now I spend all my time growing peppercorns and other deliteful things.',
          plot_name: 'The Tomato Heads'
        }),
        knex('plots').insert({
          id: 5,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0004.png',
          about: 'So excited to have a garden to fulfill my salsa cravings.',
          plot_name: 'Brad Efting'
        }),
        knex('plots').insert({
          id: 6,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0005.png',
          about: 'Love artichokes!',
          plot_name: 'Kyle Joyce'
        }),
        knex('plots').insert({
          id: 7,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0006.png',
          about: 'Who said you could not grow starfruit in Colorado?',
          plot_name: 'Kyle Gray'
        }),
        knex('plots').insert({
          id: 8,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0007.png',
          about: 'This is a sweet garden.',
          plot_name: 'Gordon Graham'
        }),
        knex('plots').insert({
          id: 9,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0008.png',
          about: 'Community gardening with a cherry on top!',
          plot_name: 'Malilia Clearwater'
        }),
        knex('plots').insert({
          id: 10,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0009.png',
          about: 'I am here to become the best gardener, and nobody will stop me.',
          plot_name: 'Master Gardener'
        }),
        knex('plots').insert({
          id: 11,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0010.png',
          about: 'I love some awesome onions my soup.',
          plot_name: 'Matt Gordon'
        }),
        knex('plots').insert({
          id: 12,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0011.png',
          about: 'I need some inspiration, so I planted a garden.',
          plot_name: 'Evan Busse'
        }),
        knex('plots').insert({
          id: 13,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0012.png',
          about: 'My partner is very very very annoying. Boom.',
          plot_name: 'Olivia Ridgley'
        }),
        knex('plots').insert({
          id: 14,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0013.png',
          about: 'Do not worry bout it -- Ryan.',
          plot_name: 'Ryan Kane'
        }),
        knex('plots').insert({
          id: 15,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0014.png',
          about: 'Brown onions, yellow onions, purple onions, thats it.',
          plot_name: 'Anna Lotko'
        }),
        knex('plots').insert({
          id: 16,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0015.png',
          about: 'Can not wait for my root vegetable harvest!',
          plot_name: 'Olivia Hendrick'
        }),
        knex('plots').insert({
          id: 17,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0016.png',
          about: 'Como tamos, si, amigo.',
          plot_name: 'Kegan Ridgley'
        }),
        knex('plots').insert({
          id: 18,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0017.png',
          about: 'Planting my roots in Colorado!',
          plot_name: 'Brad Chapin'
        }),
        knex('plots').insert({
          id: 19,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0018.png',
          about: 'I just love gardening, so I got a community garden.',
          plot_name: 'Matt Pestridge'
        }),
        knex('plots').insert({
          id: 20,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0001.png',
          about: '22, female, Boulder, CO. Seeking companionship. - Olivia Ridgley',
          plot_name: 'Brendan Haskins'
        }),
        knex('plots').insert({
          id: 21,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0002.png',
          about: 'My name is Ryan, and I love community gardening.',
          plot_name: 'Mat Brown'
        }),
        knex('plots').insert({
          id: 22,
          user_id: 5,
          farm: 'centennial_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'I am bananas for growing gardens!',
          plot_name: 'Teddi Maull'
        })
      ]);
    })
    .then(() => knex.raw("ALTER TABLE plots AUTO_INCREMENT = 1"));
};
