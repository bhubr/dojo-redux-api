const axios = require('axios');
const util = require('util');
const db = require('../db');

const query = util.promisify(db.query.bind(db));

const COUNT = 20;

const ucfirst = str => str[0].toUpperCase() + str.slice(1);

axios.get(`https://randomuser.me/api/?nat=fr&results=${COUNT}`)
  .then(res => res.data)
  .then(({ results }) => results.map(
    ({
      gender,
      name: { first, last },
      picture: { large: avatar }
    }, i) => {
      const firstname = ucfirst(first);
      const lastname = ucfirst(last);
      const user = { gender, firstname, lastname, avatar };
      return user
    }
  ))
  .then(users => users.map(u => query('INSERT INTO user SET ?', u)))
  .then(promises => Promise.all(promises))
  .then(() => process.exit());