let assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`🤑️: ${actual} === ${expected}`)
    : console.log(`🤬️: ${actual} !== ${expected}`);
};

let assertEqualArr = function(actual, expected) {
  if (actual.length <= 1 && expected.length <= 1) {
    assertEqual(actual[0], expected[0]);
  }

  if (actual.length !== expected.length) {
    console.log(`🤬️: actual array length: ${actual.length} !== expected array length: ${expected.length}`);
    return false;
  }

  for (let i = (actual.length - 1); i >= 0; i--) {
    assertEqual(actual[i], expected[i]);
  }
};

let tail = function(arr) {
  return arr.slice(1);
};

assertEqualArr(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
assertEqualArr(tail([1]), []);
assertEqualArr(tail(['apples', 'oranges', 'berries', 'hoomans']), ['hoomans']);
assertEqualArr(tail([]), []);