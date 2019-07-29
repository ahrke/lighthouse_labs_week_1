const eqArrays = require('../eqArrays').eqArrays;
const flatten = require('../flatten');
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

  it("should return true when flatten returns correct array", () => {
    let input = [[1,2],3,4,[[[5]],6],[[7]]];
    let output = [1,2,3,4,5,6,7];
    expect(eqArrays(flatten(input),output)).to.eql(true);
  })
})
