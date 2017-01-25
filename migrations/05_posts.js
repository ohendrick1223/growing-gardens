'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments();
    table.text('category');
    table.text('posts_name');
    table.text('description');
    table.text('contact');
    table.text("posts_image_url");
    table.integer('user_id').unsigned().notNullable()
      .references('id').inTable('users');
    table.boolean('want').defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('posts');
};
