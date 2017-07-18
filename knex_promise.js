var knexConfig = require('./knexfile')
var knex = require('knex')(knexConfig.development)

// Print All the Beers for Brewery with name Brewer 1
knex
  .select('*')
  // .select('last_name')
  .from('famous_people')
//  .innerJoin('breweries', 'beers.brewery_id', 'breweries.id')
  .where("last_name", "Rudd")
  .then( (results) => {
    console.log(results);
    results.map( (famous_people) => {
      console.log(famous_people.first_name);
      return knex.destroy();
    })
  })

