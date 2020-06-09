const express = require('express');
const faker = require('faker');
const cors = require('cors');
const _ = require('lodash');

const app = express();
const port = 3000;

app.use(cors());

app.get('/npcs', function (req, res) {
  res.send('nothing here!');
});

app.get('/', (_, res) => res.send('Hello World!'));

const server = app.listen(port, () =>
  console.log(`NPC generator listening on port ${port}`)
);

module.exports = { app, server };
