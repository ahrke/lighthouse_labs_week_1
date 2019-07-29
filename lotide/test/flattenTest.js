const flatten = require('../flatten');
const expect = require('chai').expect;

describe("flatten", () => {
  it("should return a flat array when given a nested array", () => {
    let input = [1, 2, [3, 4], 5, [6]];
    let output = [1,2,3,4,5,6];
    expect(flatten(input)).to.eql(output);
  })

  it("should not return an array with a nested array inside", () => {
    let input = [1, 2, [3, 4], 5, [6]];
    let output = [1,2,3,4,5,[6]];
    expect(flatten(input)).to.not.eql(output);
  })

  it("should return a flat array given deeply nested arrays", () => {
    let input = [["a", 1, 2], [3, [[4]], [5]], [[[[6]]]]];
    let output = ["a",1,2,3,4,5,6];
    expect(flatten(input)).to.eql(output);
  })
})
