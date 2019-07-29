const eqArrays = require('../eqArrays').eqArrays;
const expect = require('chai').expect;

describe("eqArrays", () => {
  it("should return true if input and output arrays are equal", () => {
    let input = [1, 2, 3];
    let input2 = [1, 2, 3];
    let output = true;
    expect(eqArrays(input, input2)).to.equal(output);
  })

  it("should return false if two arrays are not the same", () => {
    let input1 = [1, "2", "3"];
    let input2 = [1, 2, 3];
    let output = false;
    expect(eqArrays(input1, input2)).to.equal(output);
  })

  it("should return true with two equal nested arrays", () => {
    let input = [[2, 3], [4]];
    let input2 = [[2, 3], [4]];
    let output = true;
    expect(eqArrays(input, input2)).to.equal(output);
  })

  it("should return false when given two uneven nested arrays", () => {
    let input = [[2, 3], [4]];
    let input2 = [[2, 3], [4, 5]];
    let output = false;
    expect(eqArrays(input, input2)).to.equal(output);
  })
})


// 
// 
// assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), false);
// assertEqual(eqArrays(["a", "b", 10], ["a", "b", 10]), true);

//  // => true
//  // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false