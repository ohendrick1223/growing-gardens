'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('produce').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('produce').insert({
          id: 1,
          produce_name: 'Artichoke',
          produce_image_url: '../../assets/icons/artichoke_icon.svg',
          color: 'acce89'
        }),
        knex('produce').insert({
          id: 2,
          produce_name: 'Asparagus',
          produce_image_url: '../../assets/icons/asparagus_icon.svg',
          color: 'acce89'
        }),
        knex('produce').insert({
          id: 3,
          produce_name: 'Avocado',
          produce_image_url: '../../assets/icons/avocado_icon.svg',
          color: 'acce89'
        }),
        knex('produce').insert({
          id: 4,
          produce_name: 'Banana',
          produce_image_url: '../../assets/icons/banana_icon.svg',
          color: 'f4e07d'
        }),
        knex('produce').insert({
          id: 5,
          produce_name: 'Beets',
          produce_image_url: '../../assets/icons/beet_icon.svg',
          color: 'db8ab3'
        }),
        knex('produce').insert({
          id: 6,
          produce_name: 'Blackberries',
          produce_image_url: '../../assets/icons/blackberries_icon.svg',
          color: '897099'
        }),
        knex('produce').insert({
          id: 7,
          produce_name: 'Blueberries',
          produce_image_url: '../../assets/icons/blueberries_icon.svg',
          color: '5b88aa'
        }),
        knex('produce').insert({
          id: 8,
          produce_name: 'Broccoli',
          produce_image_url: '../../assets/icons/broccoli_icon.svg',
          color: 'acce89'
        }),
        knex('produce').insert({
          id: 9,
          produce_name: 'Brown Onion',
          produce_image_url: '../../assets/icons/brown_onion_icon.svg',
          color: 'ba9873'
        }),
        knex('produce').insert({
          id: 10,
          produce_name: 'Brussel Sprout',
          produce_image_url: '../../assets/icons/brussel_sprouts_icon.svg',
          color: '6cad73'
        }),
        knex('produce').insert({
          id: 11,
          produce_name: 'Butternut Squash',
          produce_image_url: '../../assets/icons/butter_nut_squash_icon.svg',
          color: 'ffbe71'
        }),
        knex('produce').insert({
          id: 12,
          produce_name: 'Cabbage',
          produce_image_url: '../../assets/icons/cabbage_icon.svg',
          color: 'acce89'
        }),
        knex('produce').insert({
          id: 13,
          produce_name: 'Carrot',
          produce_image_url: '../../assets/icons/carrot_icon.svg',
          color: 'ffbe71'
        }),
        knex('produce').insert({
          id: 14,
          produce_name: 'Cauliflour',
          produce_image_url: '../../assets/icons/cauliflour_icon.svg',
          color: 'ecddaa'
        }),
        knex('produce').insert({
          id: 15,
          produce_name: 'Cellary',
          produce_image_url: '../../assets/icons/cellary_icon.svg',
          color: '6cad73'
        }),
        knex('produce').insert({
          id: 16,
          produce_name: 'Cherries',
          produce_image_url: '../../assets/icons/cherries_icon.svg',
          color: 'b7586c'
        }),
        knex('produce').insert({
          id: 17,
          produce_name: 'Corn',
          produce_image_url: '../../assets/icons/corn_icon.svg',
          color: 'f4e07d'
        }),
        knex('produce').insert({
          id: 18,
          produce_name: 'Cucumber',
          produce_image_url: '../../assets/icons/cucumber_icon.svg',
          color: '6cad73'
        }),
        knex('produce').insert({
          id: 19,
          produce_name: 'Eggplant',
          produce_image_url: '../../assets/icons/eggplant_icon.svg',
          color: '897099'
        }),
        knex('produce').insert({
          id: 20,
          produce_name: 'Garlic',
          produce_image_url: '../../assets/icons/garlic_icon.svg',
          color: 'ecddaa'
        }),
        knex('produce').insert({
          id: 21,
          produce_name: 'Gooseberry',
          produce_image_url: '../../assets/icons/gooseberry_icon.svg',
          color: '897099'
        }),
        knex('produce').insert({
          id: 22,
          produce_name: 'Green Bell Pepper',
          produce_image_url: '../../assets/icons/green_bell_pepper_icon.svg',
          color: '6cad73'
        }),
        knex('produce').insert({
          id: 23,
          produce_name: 'Leek',
          produce_image_url: '../../assets/icons/leek_icon.svg',
          color: 'acce89'
        }),
        knex('produce').insert({
          id: 24,
          produce_name: 'Lemon',
          produce_image_url: '../../assets/icons/lemon_icon.svg',
          color: 'f4e07d'
        }),
        knex('produce').insert({
          id: 25,
          produce_name: 'Lettuce',
          produce_image_url: '../../assets/icons/lettuce_icon.svg',
          color: '6cad73'
        }),
        knex('produce').insert({
          id: 26,
          produce_name: 'Lime',
          produce_image_url: '../../assets/icons/lime_icon.svg',
          color: '6cad73'
        }),
        knex('produce').insert({
          id: 27,
          produce_name: 'Mango',
          produce_image_url: '../../assets/icons/mango_icon.svg',
          color: 'ffbe71'
        }),
        knex('produce').insert({
          id: 28,
          produce_name: 'Mushroom',
          produce_image_url: '../../assets/icons/mushroom_icon.svg',
          color: 'ba9873'
        }),
        knex('produce').insert({
          id: 29,
          produce_name: 'Olives',
          produce_image_url: '../../assets/icons/olives_icon.svg',
          color: 'acce89'
        }),
        knex('produce').insert({
          id: 30,
          produce_name: 'Okra',
          produce_image_url: '../../assets/icons/other_icon.svg',
          color: 'acce89'
        }),
        knex('produce').insert({
          id: 31,
          produce_name: 'Orange',
          produce_image_url: '../../assets/icons/orange_icon.svg',
          color: 'ffbe71'
        }),
        knex('produce').insert({
          id: 32,
          produce_name: 'Orange Spicy Pepper',
          produce_image_url: '../../assets/icons/orange_spicy_pepper_icon.svg',
          color: 'ffbe71'
        }),
        knex('produce').insert({
          id: 33,
          produce_name: 'Parsnip',
          produce_image_url: '../../assets/icons/parsnip_icon.svg',
          color: 'f4e07d'
        }),
        knex('produce').insert({
          id: 34,
          produce_name: 'Peach',
          produce_image_url: '../../assets/icons/peach_icon.svg',
          color: 'f29999'
        }),
        knex('produce').insert({
          id: 35,
          produce_name: 'Pear',
          produce_image_url: '../../assets/icons/pear_icon.svg',
          color: '6cad73'
        }),
        knex('produce').insert({
          id: 36,
          produce_name: 'Peas',
          produce_image_url: '../../assets/icons/peas_icon.svg',
          color: '6cad73'
        }),
        knex('produce').insert({
          id: 37,
          produce_name: 'Pickle',
          produce_image_url: '../../assets/icons/pickle_icon.svg',
          color: 'acce89'
        }),
        knex('produce').insert({
          id: 38,
          produce_name: 'Pineapple',
          produce_image_url: '../../assets/icons/pineapple_icon.svg',
          color: 'f4e07d'
        }),
        knex('produce').insert({
          id: 39,
          produce_name: 'Plum',
          produce_image_url: '../../assets/icons/plum_icon.svg',
          color: '897099'
        }),
        knex('produce').insert({
          id: 40,
          produce_name: 'Potato',
          produce_image_url: '../../assets/icons/potato_icon.svg',
          color: 'ba9873'
        }),
        knex('produce').insert({
          id: 41,
          produce_name: 'Pumpkin',
          produce_image_url: '../../assets/icons/pumpkin_icon.svg',
          color: 'ffbe71'
        }),
        knex('produce').insert({
          id: 42,
          produce_name: 'Radish',
          produce_image_url: '../../assets/icons/radish_icon.svg',
          color: 'db8ab3'
        }),
        knex('produce').insert({
          id: 43,
          produce_name: 'Red Apple',
          produce_image_url: '../../assets/icons/red_apple_icon.svg',
          color: 'b7586c'
        }),
        knex('produce').insert({
          id: 44,
          produce_name: 'Red Bell Pepper',
          produce_image_url: '../../assets/icons/red_bell_pepper_icon.svg',
          color: 'b7586c'
        }),
        knex('produce').insert({
          id: 45,
          produce_name: 'Red Onion',
          produce_image_url: '../../assets/icons/red_onion_icon.svg',
          color: 'db8ab3'
        }),
        knex('produce').insert({
          id: 46,
          produce_name: 'Red Spicy Pepper',
          produce_image_url: '../../assets/icons/red_spicy_pepper_icon.svg',
          color: 'b7586c'
        }),
        knex('produce').insert({
          id: 47,
          produce_name: 'Rubarb',
          produce_image_url: '../../assets/icons/rubarb_icon.svg',
          color: 'db8ab3'
        }),
        knex('produce').insert({
          id: 48,
          produce_name: 'Shallot',
          produce_image_url: '../../assets/icons/shallot_icon.svg',
          color: 'ecddaa'
        }),
        knex('produce').insert({
          id: 49,
          produce_name: 'Squash',
          produce_image_url: '../../assets/icons/squash_icon.svg',
          color: 'ffbe71'
        }),
        knex('produce').insert({
          id: 50,
          produce_name: 'Starfruit',
          produce_image_url: '../../assets/icons/starfruit_icon.svg',
          color: 'f4e07d'
        }),
        knex('produce').insert({
          id: 51,
          produce_name: 'Strawberry',
          produce_image_url: '../../assets/icons/strawberry_icon.svg',
          color: 'b7586c'
        }),
        knex('produce').insert({
          id: 52,
          produce_name: 'Tomato',
          produce_image_url: '../../assets/icons/tomato_2_icon.svg',
          color: 'b7586c'
        }),
        knex('produce').insert({
          id: 53,
          produce_name: 'Turnip',
          produce_image_url: '../../assets/icons/turnip_2_icon.svg',
          color: 'f29999'
        }),
        knex('produce').insert({
          id: 54,
          produce_name: 'Watermelon',
          produce_image_url: '../../assets/icons/watermelon_icon.svg',
          color: '6cad73'
        }),
        knex('produce').insert({
          id: 55,
          produce_name: 'Yam',
          produce_image_url: '../../assets/icons/yam_icon.svg',
          color: 'ffbe71'
        }),
        knex('produce').insert({
          id: 56,
          produce_name: 'Yellow Bell Pepper',
          produce_image_url: '../../assets/icons/yellow_bell_pepper_icon.svg',
          color: 'f4e07d'
        }),
        knex('produce').insert({
          id: 57,
          produce_name: 'Yellow Onion',
          produce_image_url: '../../assets/icons/yellow_onion_icon.svg',
          color: 'f4e07d'
        }),
        knex('produce').insert({
          id: 58,
          produce_name: 'Yellow Spicy Pepper',
          produce_image_url: '../../assets/icons/yellow_spicy_pepper_icon.svg',
          color: 'f4e07d'
        }),
        knex('produce').insert({
          id: 59,
          produce_name: 'Zucchini',
          produce_image_url: '../../assets/icons/zuccini_icon.svg',
          color: '6cad73'
        })
      ]);
    })
    .then(() => knex.raw("ALTER TABLE produce AUTO_INCREMENT = 1"));
};
