const tail = require('../tail').tail;
const expect = require('chai').expect;

describe("tail", () => {
  it("should return true if output is equal to array elements following first element", () => {
    let input = [1,2,3,4,5];
    let output = [2,3,4,5];
    expect(tail(input)).to.eql(output);
  })

  it("should return false when output is the head of the array", () => {
    let input = [1,2,3,4,5];
    let output = [1];
    expect(tail(input)).to.not.eql(output);
  })
})


// assertArraysEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
// assertArraysEqual(tail([1]), []);
// assertArraysEqual(tail(['apples', 'oranges', 'berries', 'hoomans']), ['hoomans']);
// assertArraysEqual(tail([]), []);