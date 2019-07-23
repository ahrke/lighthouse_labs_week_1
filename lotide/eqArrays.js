const assertEqual = require('./assertEqual').assertEqual;

let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, "2", "3"], [1, 2, 3]), false);
// assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), false);
// assertEqual(eqArrays(["a", "b", 10], ["a", "b", 10]), true);

module.exports = {
  eqArrays
}