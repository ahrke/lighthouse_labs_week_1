const { findKeyByValue } = require('../findKeyByValue');
const { expect } = require('chai');

describe("findKeyByValue", () => {
  it("should return correct key given a value", () => {
    let input = "The Expanse";
    let output = "sciFi";
    expect(findKeyByValue(bestTVShowsByGenre, input)).to.equal(output);
  })

  it("should return undefined if no key exists for given value", () => {
    let input = "That '70s Show";
    let output = undefined;
    expect(findKeyByValue(bestTVShowsByGenre, input)).to.be.undefined;
  })
})


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};