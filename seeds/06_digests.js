"use strict";

exports.seed = function (knex, Promise) {
  return knex ("digests").del()
  .then (function () {
    return Promise.all ([
      knex("digests").insert({
        id : 1,
        user_id : 1
        message : "This is the first message."
      }),
      knex("digests").insert({
        id : 2,
        user_id : 3,
        message : "Here is another message."
      }),
      knex("digests").insert({
        id : 3,
        user_id : 2,
        message : "This is the last message."
      })
    ]);
  })
  .then (() => knex.raw ("ALTER TABLE digests AUTO_INCREMENT = 1"))
};
