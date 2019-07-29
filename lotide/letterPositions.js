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

module.exports = {
  letterPositions
}