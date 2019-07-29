const assertEqual = require('../assertEqual').assertEqual;

describe("assertEqual", () => {
  it("should return true if both input are the same", () => {
    let input = 'bambalaaands';
    let output = 'bambalaaands';
    assertEqual(input,output);
  })

  it("should return false if they do not match", () => {
    let input = 'Lighthouse Labs';
    let output = 'Bootcamp';
    assertEqual(input, output);
  })
})

// 
// assertEqual(1,1);
// 
// assertEqual('ambidextrous','ambidextros');
// assertEqual(12,12);
// assertEqual(2048,3048);