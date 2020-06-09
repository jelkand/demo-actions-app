const faker = require('faker');
const _ = require('lodash');

const classes = ['Cleric', 'Fighting Man', 'Magic User'];

const generateNpc = () => ({
  firstName: 'Jack',
  lastName: faker.name.lastName(),
  class: _.sample(classes),
  // level: _.random(1, 20),
});

module.exports = {
  generateNpc,
  classes,
};
