const assertArraysEqual = require('./assertArraysEqual').assertArraysEqual;

const letterPositions = function(sentence) {
  const results = {};
  
  sentence.split('').forEach((char,ind) => {
    if (char === ' ') return;

    results[char] ?
      results[char].push(ind)
      : results[char] = [ind];
  });

  return results;
};

assertArraysEqual(letterPositions('lighthouse in the house')['i'], [1,11]);
assertArraysEqual(letterPositions('lighthouse in the house')['h'], [3, 5, 15, 18]);
assertArraysEqual(letterPositions('   jelly  ')['j'], [0]);