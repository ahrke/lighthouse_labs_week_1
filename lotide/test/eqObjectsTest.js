const eqObjects = require('../eqObjects');
const {expect} = require('chai');

describe("eqObjects", () => {
  it("should return true when given equal objects", () => {
    let input = { name: "Dave" };
    let output = { name: "Dave"};
    expect(eqObjects(input, output)).to.equal(true);
  })

  it("should return false when two unequal objects are given", () => {
    let input = { name: "Dave" };
    let output = { name: "Sam"};
    expect(eqObjects(input, output)).to.equal(false);
  })

  it("should return true when given two equal nested objects", () => {
    let input = { a: { z: 1 }, b: 2 };
    let output = { a: { z: 1 }, b: 2 };
    expect(eqObjects(input, output)).to.equal(true)
  })

  it("should return false when given two unequal nested objects", () => {
    let input = { a: { y: 0, z: 1 }, b: 2 };
    let output = { a: { z: 1 }, b: 2 };
    expect(eqObjects(input, output)).to.equal(false)
  })
})


// assertEqual(eqObjects(, { a: { z: 1 }, b: 2 }), true) // => true

// assertEqual(eqObjects(), false) // => false