
exports.up = function(knex, Promise) {
  return knex.schema.createTable('onsen', table => {
      table.increments('id').primary()
      table.text('name')
      table.text('city')
      table.integer('numberOfPools')
      table.text('establishment')
      table.integer('averageTemp')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('onsen')
  
};
