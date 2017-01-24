'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('digests', table => {
    table.increments();
    table.integer('user_id').unsigned().notNullable()
      .references('id').inTable('users').onDelete('CASCADE');
    table.text('message');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('posts');
};
