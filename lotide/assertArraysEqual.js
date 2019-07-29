const eqArrays = require('./eqArrays').eqArrays;

let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`🤑️: ${arr1} === ${arr2}`);
    return true;
  } else {
    console.log(`🤬️: ${arr1} !== ${arr2}`);
    return false;
  }
};

module.exports = {
  assertArraysEqual
}