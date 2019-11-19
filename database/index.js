const mysql = require('mysql');
const { promisifyAll } = require('bluebird');

const config = require('./config.js');

const db = mysql.createConnection(config);
const query = db.query.bind(db);
promisifyAll(db);

db.connectAsync()
  .then(() => {
    console.log('DATABASE CONNECTION SUCCESSFUL.');
  })
  .catch((err) => {
    throw new Error(`DATABASE CONNECTION FAILED! ${err}`);
  });

module.exports = {
  query,
};
