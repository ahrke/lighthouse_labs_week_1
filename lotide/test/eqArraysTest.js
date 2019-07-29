const eqArrays = require('../eqArrays').eqArrays;
const assertEqual = require('../assertEqual').assertEqual;

describe("eqArrays", () => {
  it("should return true if input and output arrays are equal", () => {
    let input = eqArrays([1, 2, 3], [1, 2, 3]);
    let output = true;
    assertEqual(input, output);
  })

  it("should return false if two arrays are not the same", () => {
    let input = eqArrays([1, "2", "3"], [1, 2, 3]);
    let output = false;
    assertEqual(input, output);
  })
})


// 
// 
// assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), false);
// assertEqual(eqArrays(["a", "b", 10], ["a", "b", 10]), true);

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false