const assertArraysEqual = require('../assertArraysEqual').assertArraysEqual;
const middle = require('../middle').middle;
const expect = require('chai').expect;

describe("middle" , () => {
  it("should return two middle numbers when given even numbered array", () => {
    let input = [1,2,3,4];
    let output = [2,3];
    expect(assertArraysEqual(middle(input), output)).to.equal(true);
  })

  it("should return an empty array when given a single item", () => {
    let input = [1];
    let output = [];
    expect(middle(input)).to.eql(output);
  })

  it("should return middle of array when given an odd numbered array", () => {
    let input = [1,2,3,4,5];
    let output =  [3];
    expect(middle(input)).to.eql(output);
  })
})


