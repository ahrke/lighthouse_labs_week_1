const assertEqual = require('./assertEqual').assertEqual;

const findKeyByValue = function(obj, value) {
  for (let currKey of Object.keys(obj)) {
    if (obj[currKey] === value) return currKey;
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);