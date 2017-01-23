'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('produce_plots', table => {
    table.increments();
    table.integer('plot_id').unsigned().notNullable()
      .references('id').inTable('plots').onDelete('CASCADE');
    table.integer('produce_id').unsigned().notNullable()
      .references('id').inTable('produce').onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('produce_plots');
};
