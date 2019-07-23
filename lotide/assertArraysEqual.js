const eqArrays = require('./eqArrays').eqArrays;

let assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1,arr2) ?
    console.log(`🤑️: ${arr1} === ${arr2}`)
    : console.log(`🤬️: ${arr1} !== ${arr2}`);
};

module.exports = {
  assertArraysEqual
}