const assertArraysEqual = require('./assertArraysEqual').assertArraysEqual;

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

// assertArraysEqual(results1,['g','c','t','m','t'])
// assertArraysEqual(map(["apple","tree","hits","man","bouncily"], word => word[0]),['a','t','h','m','b'])
// assertArraysEqual(map(["tree","loves","giving","air"], word => word[0]),['t','l','g','a'])
// assertArraysEqual(map(["man"], word => word[0]),['m'])