'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('email').notNullable();
    table.text('hashed_password').notNullable().defaultTo('');
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};
