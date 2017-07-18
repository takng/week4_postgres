let lastName = process.argv[2];
console.log(lastName);

//  "user": "development",
//  "password": "development",
//  "database": "vagrant",
//  "hostname": "localhost",
//  "port": 5432,
//  "ssl": true

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'development',
    password : 'development',
    database : 'vagrant'
  }
});

const pg = require("pg");
//const knex = require("knex");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

var config      = require('./knexfile.js');  
var env         = 'development';  
var knex        = require('knex')(config[env]);

module.exports = knex;

knex.select('*').from('famous_people')
.where('last_name', '=', $lastName)
//.andWhere('last_name', '=', 200)
.limit(10)
.offset(x)
.asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log(rows);
});

  //knex.select('id').from('nicknames')
   // .whereIn('nickname', _.pluck(rows, 'name'))
    //.asCallback(function(err, rows) {
     // if (err) return console.error(err);
