const tail = require('../tail').tail;
const assertArraysEqual = require('../assertArraysEqual').assertArraysEqual;

describe("tail", () => {
  it("should return true if output is equal to array elements following first element", () => {
    let input = [1,2,3,4,5];
    let output = [2,3,4,5];
    assertArraysEqual(tail(input),output)
  })
})