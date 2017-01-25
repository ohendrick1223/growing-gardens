'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('produce_plots').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 3
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 4
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 6
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 7
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 8
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 9
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 11
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 12
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 13
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 14
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 15
        }),
        knex('produce_plots').insert({
          plot_id: 1,
          produce_id: 16
        }), // 16
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 17
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 18
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 19
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 20
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 21
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 22
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 23
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 24
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 25
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 26
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 27
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 28
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 29
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 30
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 31
        }),
        knex('produce_plots').insert({
          plot_id: 2,
          produce_id: 32
        }), // 16
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 33
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 34
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 35
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 36
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 37
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 38
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 39
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 40
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 41
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 42
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 43
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 44
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 45
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 46
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 47
        }),
        knex('produce_plots').insert({
          plot_id: 3,
          produce_id: 48
        }), // 16
        knex('produce_plots').insert({
          plot_id: 4,
          produce_id: 33
        }),
        knex('produce_plots').insert({
          plot_id: 4,
          produce_id: 34
        }),
        knex('produce_plots').insert({
          plot_id: 4,
          produce_id: 35
        }),
        knex('produce_plots').insert({
          plot_id: 4,
          produce_id: 36
        }), // 4
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 37
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 38
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 39
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 40
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 41
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 42
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 43
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 44
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 45
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 46
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 47
        }),
        knex('produce_plots').insert({
          plot_id: 5,
          produce_id: 48
        }), // 12
        knex('produce_plots').insert({
          plot_id: 6,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          plot_id: 6,
          produce_id: 2
        }),
        knex('produce_plots').insert({
          plot_id: 7,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          plot_id: 7,
          produce_id: 3
        }), // 4
        knex('produce_plots').insert({
          plot_id: 8,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          plot_id: 8,
          produce_id: 3
        }),
        knex('produce_plots').insert({
          plot_id: 9,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          plot_id: 9,
          produce_id: 3
        }),
        knex('produce_plots').insert({
          plot_id: 9,
          produce_id: 4
        }),
        knex('produce_plots').insert({
          plot_id: 9,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          plot_id: 9,
          produce_id: 6
        }),
        knex('produce_plots').insert({
          plot_id: 9,
          produce_id: 7
        }),
        knex('produce_plots').insert({
          plot_id: 9,
          produce_id: 8
        }),
        knex('produce_plots').insert({
          plot_id: 10,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          plot_id: 10,
          produce_id: 2
        }),
        knex('produce_plots').insert({
          plot_id: 10,
          produce_id: 3
        }), // 12
        knex('produce_plots').insert({
          plot_id: 11,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          plot_id: 11,
          produce_id: 4
        }),
        knex('produce_plots').insert({
          plot_id: 12,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          plot_id: 13,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          plot_id: 14,
          produce_id: 1
        }), // 12
        knex('produce_plots').insert({
          plot_id: 15,
          produce_id: 33
        }), // 12
        knex('produce_plots').insert({
          plot_id: 15,
          produce_id: 32
        }), // 12
        knex('produce_plots').insert({
          plot_id: 15,
          produce_id: 31
        }), // 12
        knex('produce_plots').insert({
          plot_id: 15,
          produce_id: 30
        }), // 12
        knex('produce_plots').insert({
          plot_id: 16,
          produce_id: 1
        }), // 12
        knex('produce_plots').insert({
          plot_id: 16,
          produce_id: 2
        }), // 12
        knex('produce_plots').insert({
          plot_id: 16,
          produce_id: 3
        }), // 12
        knex('produce_plots').insert({
          plot_id: 16,
          produce_id: 4
        }), // 12
        knex('produce_plots').insert({
          plot_id: 17,
          produce_id: 1
        }), // 12
        knex('produce_plots').insert({
          plot_id: 17,
          produce_id: 2
        }), // 12
        knex('produce_plots').insert({
          plot_id: 17,
          produce_id: 3
        }), // 12
        knex('produce_plots').insert({
          plot_id: 17,
          produce_id: 4
        }), // 12
        knex('produce_plots').insert({
          plot_id: 17,
          produce_id: 5
        }), // 12
        knex('produce_plots').insert({
          plot_id: 17,
          produce_id: 6
        }), // 12
        knex('produce_plots').insert({
          plot_id: 17,
          produce_id: 7
        }), // 12
        knex('produce_plots').insert({
          plot_id: 17,
          produce_id: 8
        }), // 12
        knex('produce_plots').insert({
          plot_id: 18,
          produce_id: 1
        }), // 12
        knex('produce_plots').insert({
          plot_id: 18,
          produce_id: 2
        }), // 12
        knex('produce_plots').insert({
          plot_id: 18,
          produce_id: 3
        }), // 12
        knex('produce_plots').insert({
          plot_id: 19,
          produce_id: 1
        }), // 12
        knex('produce_plots').insert({
          plot_id: 19,
          produce_id: 5
        }), // 12
        knex('produce_plots').insert({
          plot_id: 20,
          produce_id: 1
        }), // 12
        knex('produce_plots').insert({
          plot_id: 21,
          produce_id: 1
        }), // 12
        knex('produce_plots').insert({
          plot_id: 22,
          produce_id: 1
        }) // 12
      ]);
    })
    .then(() => knex.raw("ALTER TABLE produce_plots AUTO_INCREMENT = 1"));
};
