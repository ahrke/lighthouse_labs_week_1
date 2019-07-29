const assertArraysEqual = require('../assertArraysEqual').assertArraysEqual;
const middle = require('../middle').middle;
const expect = require('chai').expect;

describe("assertArraysEqual", () => {
  it("should return true for assertion of middle([1,2,3,4]) with [2,3]", () => {
    let input = [1,2,3,4];
    let output = [2,3];
    expect(assertArraysEqual(middle(input), output)).to.eql(true);
  })

  it("should return false when asserting middle([12,3,4]) with [1,2,3,4]", () => {
    let input = [12,3,4];
    let output = [1,2,3,4];
    expect(assertArraysEqual(middle(input), output)).to.eql(false);
  })
})