const {letterPositions} = require('../letterPositions');
const { expect } = require('chai');

describe("letterPositions", () => {
  it("should return the correct position(s) of indicated character", () => {
    let input = 'lighthouse in the house';
    let output = [3, 5, 15, 18];
    expect(letterPositions(input)['h'], output).to.eql(output);
  })

  it("should return correct position of chosen value despute spaces", () => {
    let input = '   jelly  ';
    let output = [3];
    expect(letterPositions(input)['j']).to.eql(output);
  })
})
