"use strict";

exports.seed = function (knex, Promise) {
  return knex("digests").del()
    .then(function () {
      return Promise.all([
        knex("digests").insert({
          id: 1,
          user_id: 1,
          message: "Does anyone wanna join me for gardening this beautiful, cold, afternoon?"
        }),
        knex("digests").insert({
          id: 2,
          user_id: 3,
          message: "I really need a shovel in the Centennial Garden, can someone bring me one? You're a life-saver!"
        }),
        knex("digests").insert({
          id: 3,
          user_id: 2,
          message: "On my way. Shovel in hand."
        })
      ]);
    })
    .then(() => knex.raw("ALTER TABLE digests AUTO_INCREMENT = 1"))
};
