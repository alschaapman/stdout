const express = require('express');
const path = require('path');
const { promisifyAll } = require('bluebird');

const db = require('../database/index.js');

const app = express();
promisifyAll(app);
const port = process.env.HTTP_PORT || 8080;
app.use(express.static(path.join(__dirname, '../client')));

app.listenAsync(port)
  .then(() => {
    console.log(`SERVER LISTENING ON PORT ${port}.`);
  })
  .catch((err) => {
    console.error(err);
  });
