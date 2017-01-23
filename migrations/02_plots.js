'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('plots', table => {
    table.increments();
    table.integer('user_id').unsigned()
      .references('id').inTable('users');
    table.text('name');
    table.text('farm');
    table.text('image_url');
    table.text('about');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('plots');
};
