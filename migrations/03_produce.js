'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('produce', table => {
    table.increments();
    table.text('produce_name');
    table.text('produce_image_url');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('produce');
};
