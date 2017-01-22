'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('produce', table => {
    table.increments();
    table.text('name').notNullable().defaultTo('');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(0);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('produce');
};
