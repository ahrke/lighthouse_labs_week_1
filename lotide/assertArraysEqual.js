const eqArrays = require('./eqArrays').eqArrays;

let assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1,arr2) ?
    console.log(`🤑️: ${arr1} === ${arr2}`)
    : console.log(`🤬️: ${arr1} !== ${arr2}`);
};

assertArraysEqual([1,2,3,4],[1,2,3,4]);
assertArraysEqual([12,3,4],[1,2,3,4])

module.exports = {
  assertArraysEqual
}