const assertEqual = require('./assertEqual').assertEqual;

let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (typeof arr1 !== typeof arr2) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) return false; 
    } 
    else if (arr1[i] !== arr2[i]) return false; 
  }
  return true;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, "2", "3"], [1, 2, 3]), false);
// assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), false);
// assertEqual(eqArrays(["a", "b", 10], ["a", "b", 10]), true);

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false

module.exports = eqArrays