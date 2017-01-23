'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('produce', table => {
    table.increments();
    table.text('name');
    table.text('image_url');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('produce');
};
