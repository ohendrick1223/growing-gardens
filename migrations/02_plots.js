'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('plots', table => {
    table.increments();
    table.integer('user_id').unsigned()
      .references('id').inTable('users');
    table.text('farm').notNullable().defaultTo('Hawthorne');
    table.text('image_url').notNullable().defaultTo('');
    table.text('about');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('plots');
};
