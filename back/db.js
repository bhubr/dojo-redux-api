const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'dojo_api_redux',
  user: 'dojoapiredux',
  password: 'dojoapiredux'
});

module.exports = connection;
