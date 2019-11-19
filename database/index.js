const mariadb = require('mariadb');

const config = require('./config.js');

const pool = mariadb.createPool(config);

pool.getConnection(config)
  .then(() => {
    console.log('DATABASE CONNECTION SUCCESSFUL.');
  })
  .catch((err) => {
    throw new Error(`DATABASE CONNECTION FAILED! ${err}`);
  });

module.exports = {
};
