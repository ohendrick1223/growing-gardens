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
        }),
        // ELEVENTH
        knex('plots').insert({
          id: 283,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'I grow 10 varieties of lettuce. Come check them out!',
          plot_name: 'John Papa'
        }),
        knex('plots').insert({
          id: 284,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0002.png',
          about: "It's a small plot of land but I grow many organic vegetables.",
          plot_name: 'Mary Hudson'
        }),
        knex('plots').insert({
          id: 285,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0001.png',
          about: 'I work for Growing Gardens but I also have my own garden plot.',
          plot_name: 'Kevin Karl'
        }),
        knex('plots').insert({
          id: 286,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0005.png',
          about: 'We grow varieties of edible flowers. The bees love us!',
          plot_name: 'The Orange Family'
        }),
        knex('plots').insert({
          id: 287,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'We share a plot but we grow produce together. Our beans are out of this world!',
          plot_name: 'Jay and John'
        }),
        knex('plots').insert({
          id: 288,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0006.png',
          about: 'We use herbs in the goodies that we sell at the coffee shop. Visit the plot or the shop',
          plot_name: "Bob's Coffee Shop"
        }),
        knex('plots').insert({
          id: 289,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0007.png',
          about: 'Our mom got this plot for us and now we can grow pumpkins!',
          plot_name: "Julie's Children"
        }),
        knex('plots').insert({
          id: 290,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'I just love it here in the garden with the smell of organic soil!',
          plot_name: 'Julie Vim'
        }),
        knex('plots').insert({
          id: 291,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0001.png',
          about: "I've never gardened before so I'm here to learn. ",
          plot_name: 'Sandy'
        }),
        knex('plots').insert({
          id: 292,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0002.png',
          about: 'I use produce from my garden to brew exotic kombucha.',
          plot_name: 'Jade'
        }),
        knex('plots').insert({
          id: 293,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0007.png',
          about: 'We just moved here from Wyoming and we love to garden!',
          plot_name: 'The Pinkertons'
        }),
        knex('plots').insert({
          id: 294,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0009.png',
          about: 'I grow 10 varieties of lettuce. Come check them out!',
          plot_name: 'John Papa'
        }),
        knex('plots').insert({
          id: 295,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: "It's a small plot of land but I grow many organic vegetables.",
          plot_name: 'Mary Hudson'
        }),
        knex('plots').insert({
          id: 296,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0007.png',
          about: 'I work for Growing Gardens but I also have my own garden plot.',
          plot_name: 'Kevin Karl'
        }),
        knex('plots').insert({
          id: 297,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0001.png',
          about: 'We grow varieties of edible flowers. The bees love us!',
          plot_name: 'The Orange Family'
        }),
        knex('plots').insert({
          id: 298,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0000.png',
          about: 'We share a plot but we grow produce together. Our beans are out of this world!',
          plot_name: 'Jay and John'
        }),
        knex('plots').insert({
          id: 299,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0005.png',
          about: 'We use herbs in the goodies that we sell at the coffee shop. Visit the plot or the shop',
          plot_name: "Bob's Coffee Shop"
        }),
        knex('plots').insert({
          id: 300,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0009.png',
          about: 'Our mom got this plot for us and now we can grow pumpkins!',
          plot_name: "Julie's Children"
        }),
        knex('plots').insert({
          id: 301,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'I just love it here in the garden with the smell of organic soil!',
          plot_name: 'Julie Vim'
        }),
        knex('plots').insert({
          id: 302,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0004.png',
          about: "I've never gardened before so I'm here to learn. ",
          plot_name: 'Sandy'
        }),
        knex('plots').insert({
          id: 303,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0004.png',
          about: 'I use produce from my garden to brew exotic kombucha.',
          plot_name: 'Jade'
        }),
        knex('plots').insert({
          id: 304,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0008.png',
          about: 'We just moved here from Wyoming and we love to garden!',
          plot_name: 'The Pinkertons'
        }),
        knex('plots').insert({
          id: 305,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'I grow 10 varieties of lettuce. Come check them out!',
          plot_name: 'John Papa'
        }),
        knex('plots').insert({
          id: 306,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0009.png',
          about: "It's a small plot of land but I grow many organic vegetables.",
          plot_name: 'Mary Hudson'
        }),
        knex('plots').insert({
          id: 307,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0005.png',
          about: 'I work for Growing Gardens but I also have my own garden plot.',
          plot_name: 'Kevin Karl'
        }),
        knex('plots').insert({
          id: 308,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'We grow varieties of edible flowers. The bees love us!',
          plot_name: 'The Orange Family'
        }),
        knex('plots').insert({
          id: 309,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'We share a plot but we grow produce together. Our beans are out of this world!',
          plot_name: 'Jay and John'
        }),
        knex('plots').insert({
          id: 310,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0002.png',
          about: 'We use herbs in the goodies that we sell at the coffee shop. Visit the plot or the shop',
          plot_name: "Bob's Coffee Shop"
        }),
        knex('plots').insert({
          id: 311,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'Our mom got this plot for us and now we can grow pumpkins!',
          plot_name: "Julie's Children"
        }),
        knex('plots').insert({
          id: 312,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0001.png',
          about: 'I just love it here in the garden with the smell of organic soil!',
          plot_name: 'Julie Vim'
        }),
        knex('plots').insert({
          id: 313,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0000.png',
          about: "I've never gardened before so I'm here to learn. ",
          plot_name: 'Sandy'
        }),
        knex('plots').insert({
          id: 314,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'I use produce from my garden to brew exotic kombucha.',
          plot_name: 'Jade'
        }),
        knex('plots').insert({
          id: 315,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0010.png',
          about: 'We just moved here from Wyoming and we love to garden!',
          plot_name: 'The Pinkertons'
        }),
        knex('plots').insert({
          id: 316,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0011.png',
          about: 'I grow 10 varieties of lettuce. Come check them out!',
          plot_name: 'John Papa'
        }),
        knex('plots').insert({
          id: 317,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: "It's a small plot of land but I grow many organic vegetables.",
          plot_name: 'Mary Hudson'
        }),
        knex('plots').insert({
          id: 318,
          user_id: 5,
          farm: 'eleventh_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0012.png',
          about: 'I work for Growing Gardens but I also have my own garden plot.',
          plot_name: 'Kevin Karl'
        }),
        // Foothills
        knex('plots').insert({
          id: 209,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0013.png',
          about: 'We grow varieties of edible flowers. The bees love us!',
          plot_name: 'The Orange Family'
        }),
        knex('plots').insert({
          id: 210,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'We share a plot but we grow produce together. Our beans are out of this world!',
          plot_name: 'Jay and John'
        }),
        knex('plots').insert({
          id: 211,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0015.png',
          about: 'We use herbs in the goodies that we sell at the coffee shop. Visit the plot or the shop',
          plot_name: "Bob's Coffee Shop"
        }),
        knex('plots').insert({
          id: 212,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0016.png',
          about: 'Our mom got this plot for us and now we can grow pumpkins!',
          plot_name: "Julie's Children"
        }),
        knex('plots').insert({
          id: 213,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0017.png',
          about: 'I just love it here in the garden with the smell of organic soil!',
          plot_name: 'Julie Vim'
        }),
        knex('plots').insert({
          id: 214,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: "I've never gardened before so I'm here to learn. ",
          plot_name: 'Sandy'
        }),
        knex('plots').insert({
          id: 215,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0018.png',
          about: 'I use produce from my garden to brew exotic kombucha.',
          plot_name: 'Jade'
        }),
        knex('plots').insert({
          id: 216,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0015.png',
          about: 'We just moved here from Wyoming and we love to garden!',
          plot_name: 'The Pinkertons'
        }),
        knex('plots').insert({
          id: 217,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'I grow 10 varieties of lettuce. Come check them out!',
          plot_name: 'John Papa'
        }),
        knex('plots').insert({
          id: 218,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0001.png',
          about: "It's a small plot of land but I grow many organic vegetables.",
          plot_name: 'Mary Hudson'
        }),
        knex('plots').insert({
          id: 219,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0002.png',
          about: 'I work for Growing Gardens but I also have my own garden plot.',
          plot_name: 'Kevin Karl'
        }),
        knex('plots').insert({
          id: 220,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'We grow varieties of edible flowers. The bees love us!',
          plot_name: 'The Orange Family'
        }),
        knex('plots').insert({
          id: 221,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'We share a plot but we grow produce together. Our beans are out of this world!',
          plot_name: 'Jay and John'
        }),
        knex('plots').insert({
          id: 222,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0005.png',
          about: 'We use herbs in the goodies that we sell at the coffee shop. Visit the plot or the shop',
          plot_name: "Bob's Coffee Shop"
        }),
        knex('plots').insert({
          id: 223,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0006.png',
          about: 'Our mom got this plot for us and now we can grow pumpkins!',
          plot_name: "Julie's Children"
        }),
        knex('plots').insert({
          id: 224,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0007.png',
          about: 'I just love it here in the garden with the smell of organic soil!',
          plot_name: 'Julie Vim'
        }),
        knex('plots').insert({
          id: 225,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0008.png',
          about: "I've never gardened before so I'm here to learn. ",
          plot_name: 'Sandy'
        }),
        knex('plots').insert({
          id: 226,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0009.png',
          about: 'I use produce from my garden to brew exotic kombucha.',
          plot_name: 'Jade'
        }),
        knex('plots').insert({
          id: 227,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0010.png',
          about: 'We just moved here from Wyoming and we love to garden!',
          plot_name: 'The Pinkertons'
        }),

        knex('plots').insert({
          id: 228,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0011.png',
          about: 'I grow 10 varieties of lettuce. Come check them out!',
          plot_name: 'John Papa'
        }),
        knex('plots').insert({
          id: 229,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0012.png',
          about: "It's a small plot of land but I grow many organic vegetables.",
          plot_name: 'Mary Hudson'
        }),
        knex('plots').insert({
          id: 230,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'I work for Growing Gardens but I also have my own garden plot.',
          plot_name: 'Kevin Karl'
        }),
        knex('plots').insert({
          id: 231,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0000.png',
          about: 'We grow varieties of edible flowers. The bees love us!',
          plot_name: 'The Orange Family'
        }),
        knex('plots').insert({
          id: 232,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0001.png',
          about: 'We share a plot but we grow produce together. Our beans are out of this world!',
          plot_name: 'Jay and John'
        }),
        knex('plots').insert({
          id: 233,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0002.png',
          about: 'We use herbs in the goodies that we sell at the coffee shop. Visit the plot or the shop',
          plot_name: "Bob's Coffee Shop"
        }),
        knex('plots').insert({
          id: 234,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'Our mom got this plot for us and now we can grow pumpkins!',
          plot_name: "Julie's Children"
        }),
        knex('plots').insert({
          id: 235,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'I just love it here in the garden with the smell of organic soil!',
          plot_name: 'Julie Vim'
        }),
        knex('plots').insert({
          id: 236,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0004.png',
          about: "I've never gardened before so I'm here to learn. ",
          plot_name: 'Sandy'
        }),
        knex('plots').insert({
          id: 237,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0005.png',
          about: 'I use produce from my garden to brew exotic kombucha.',
          plot_name: 'Jade'
        }),
        knex('plots').insert({
          id: 238,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0007.png',
          about: 'We just moved here from Wyoming and we love to garden!',
          plot_name: 'The Pinkertons'
        }),

        knex('plots').insert({
          id: 239,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0008.png',
          about: 'I grow 10 varieties of lettuce. Come check them out!',
          plot_name: 'John Papa'
        }),
        knex('plots').insert({
          id: 240,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: "It's a small plot of land but I grow many organic vegetables.",
          plot_name: 'Mary Hudson'
        }),
        knex('plots').insert({
          id: 241,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0009.png',
          about: 'I work for Growing Gardens but I also have my own garden plot.',
          plot_name: 'Kevin Karl'
        }),
        knex('plots').insert({
          id: 242,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0010.png',
          about: 'We grow varieties of edible flowers. The bees love us!',
          plot_name: 'The Orange Family'
        }),
        knex('plots').insert({
          id: 243,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0011.png',
          about: 'We share a plot but we grow produce together. Our beans are out of this world!',
          plot_name: 'Jay and John'
        }),
        knex('plots').insert({
          id: 244,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'We use herbs in the goodies that we sell at the coffee shop. Visit the plot or the shop',
          plot_name: "Bob's Coffee Shop"
        }),
        knex('plots').insert({
          id: 245,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0012.png',
          about: 'Our mom got this plot for us and now we can grow pumpkins!',
          plot_name: "Julie's Children"
        }),
        knex('plots').insert({
          id: 246,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0013.png',
          about: 'I just love it here in the garden with the smell of organic soil!',
          plot_name: 'Julie Vim'
        }),
        knex('plots').insert({
          id: 247,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0014.png',
          about: "I've never gardened before so I'm here to learn. ",
          plot_name: 'Sandy'
        }),
        knex('plots').insert({
          id: 248,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0015.png',
          about: 'I use produce from my garden to brew exotic kombucha.',
          plot_name: 'Jade'
        }),
        knex('plots').insert({
          id: 249,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0016.png',
          about: 'We just moved here from Wyoming and we love to garden!',
          plot_name: 'The Pinkertons'
        }),

        knex('plots').insert({
          id: 250,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0017.png',
          about: 'I grow 10 varieties of lettuce. Come check them out!',
          plot_name: 'John Papa'
        }),
        knex('plots').insert({
          id: 251,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0000.png',
          about: "It's a small plot of land but I grow many organic vegetables.",
          plot_name: 'Mary Hudson'
        }),
        knex('plots').insert({
          id: 252,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0001.png',
          about: 'I work for Growing Gardens but I also have my own garden plot.',
          plot_name: 'Kevin Karl'
        }),
        knex('plots').insert({
          id: 253,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0003.png',
          about: 'We grow varieties of edible flowers. The bees love us!',
          plot_name: 'The Orange Family'
        }),
        knex('plots').insert({
          id: 254,
          user_id: 5,
          farm: 'foothills_garden',
          plots_image_url: '/assets/images/plot_pics/plot__0002.png',
          about: 'We share a plot but we grow produce together. Our beans are out of this world!',
          plot_name: 'Jay and John'
        })
      ]);
    })
    .then(() => knex.raw("ALTER TABLE plots AUTO_INCREMENT = 1"));
};
