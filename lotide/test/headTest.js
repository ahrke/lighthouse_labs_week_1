const assertEqual = require('../assertEqual').assertEqual;
const head = require('../head').head;
const expect = require('chai').expect;

describe('head', () => {
  it("should return first item in array", () => {
    let input = [5,4,1];
    let output = 5;
    expect(head(input)).to.equal(output);
  })

  it("should return false if item is not the first item in array", () => {
    const input = [5,4,1];
    const output = 4;
    expect(head(input)).to.not.equal(output);
  })

  it("should return false if we did not return an item from the list", () => {
    let input = ['apple','cherry','chocolate'];
    let output = 'banana';
    expect(head(input)).to.not.equal(output);
  })
})


// assertEqual(head([5,4,1]),5);
// 
// assertEqual(head([1]),1);
// assertEqual(head([]),"whoa!");