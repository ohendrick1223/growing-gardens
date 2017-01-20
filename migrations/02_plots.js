'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('plots', table => {
    table.increments();
    table.text('username').notNullable();
    table.text('farm').notNullable().defaultTo(1);
    table.text('image_url').notNullable().defaultTo('');
    table.text('about');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('plots');
};
