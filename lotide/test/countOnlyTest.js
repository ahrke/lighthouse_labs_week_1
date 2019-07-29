const { countOnly } = require('../countOnly');
const { expect } = require('chai');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("countOnly", () => {
  it("should return 1 for looking up Karl in firstNames array", () => {
    let input = {'Karl' : true};
    let output = {'Karl': 1};
    expect(countOnly(firstNames, input)).to.eql(output);
  })

  it("should return an empty object if not name to count", () => {
    let input = {'Samantha': true};
    let output = {};
    expect(countOnly(firstNames,input)).to.eql(output)
  })

  it("should return count of multiple objects when given multiple values", () => {
    let input = {'Salima': true, 'Kavith': true, 'Fang': true, 'Agouhanna': true}
    let output = {'Salima': 2, 'Kavith': 1, 'Fang': 2, 'Agouhanna':1}
    expect(countOnly(firstNames, input)).to.eql(output)
  })
})