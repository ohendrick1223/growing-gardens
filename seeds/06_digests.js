"use strict";

exports.seed = function (knex, Promise) {
  return knex("digests").del()
    .then(function () {
      return Promise.all([
        knex("digests").insert({
          id: 1,
          user_id: 1,
          message: "I think I forgot my trowel in the shed at Centennial, can anyone check for me if they're stopping by that garden today?"
        }),
        knex("digests").insert({
          id: 2,
          user_id: 3,
          message: "I am at Centennial right and it's pouring, so watch out if you're headed this way!"
        }),
        knex("digests").insert({
          id: 3,
          user_id: 2,
          message: "Pretty muddy in Hawthorn as well."
        }),
        knex("digests").insert({
          id: 4,
          user_id: 5,
          message: "Hey Olivia R, your trowel is still here! I put it in the back left corner to make sure it's still here when you come back for it."
        })
      ]);
    })
    // .then(() => knex.raw("ALTER TABLE digests AUTO_INCREMENT = 1"))
};
