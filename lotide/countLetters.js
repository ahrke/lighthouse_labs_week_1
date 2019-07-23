const assertEqual = require('./assertEqual').assertEqual;

const countLetters = function(word) {
  let result = {};

  word.split('').forEach(char => {
    result[char] ?
      result[char]++
      : result[char] = 1;
  });

  return result;
};

assertEqual(countLetters('lighthouse')['h'],2);
assertEqual(countLetters('lllll')['l'],5);
assertEqual(countLetters('liiiigggghhhhtttt')['r'],undefined);
assertEqual(countLetters('lighthouse')['o'],1);