/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("notes", function(table) {
    table.increments("id").primary();
    table.string("title", 32).notNullable();
    table.text("content");
    table.text("news");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("notes");
};
