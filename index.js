const express = require('express');
const cors = require('cors');
const _ = require('lodash');

const { generateNpc } = require('./npcGenerator');

const app = express();
const port = 3000;

app.use(cors());

app.get('/npcs', function (req, res) {
  res.send(generateNpc());
});

app.get('/', (_, res) => res.send('Hello World!'));

const server = app.listen(port);

module.exports = { app, server };
