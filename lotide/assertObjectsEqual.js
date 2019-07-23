const eqObjects = require('./eqObjects').eqObjects;
const inspect = require('util').inspect;

const assertObjectsEqual = function(actual, expected) {
  eqObjects(actual, expected) ?
    console.log(`🤑️: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`🤬️: ${inspect(actual)} !== ${inspect(expected)}`);
};

