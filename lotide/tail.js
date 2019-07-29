const assertEqual = require('./assertEqual').assertEqual;
const assertArraysEqual = require('./assertArraysEqual').assertArraysEqual;

let tail = function(arr) {
  return arr.slice(1);
};

assertArraysEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
assertArraysEqual(tail([1]), []);
assertArraysEqual(tail(['apples', 'oranges', 'berries', 'hoomans']), ['hoomans']);
assertArraysEqual(tail([]), []);

module.exports = {
  tail
}