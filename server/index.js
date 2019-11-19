const express = require('express');
const path = require('path');

const app = express();
const port = process.env.HTTP_PORT || 8080;

app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, () => {});
