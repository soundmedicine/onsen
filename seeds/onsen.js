
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "onsen"; ALTER SEQUENCE onsen_id_seq RESTART WITH 2;')
    .then(function () {
      let onsens = [{
        id: 1,
        name: 'Glenwood Hot Springs',
        city: 'Glenwood Springs',
        numberOfPools: 10,
        establishment: 'spa',
        averageTemp: 100
      }, {
        id: 2,
        name: 'Radium Hot Springs',
        city: 'Radium',
        numberOfPools: 1,
        establishment: 'natural',
        averageTemp: 90
      }]
      return knex('onsen').insert(onsens);
    })
}
