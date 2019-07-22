let assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`🤑️: ${actual} === ${expected}`)
    : console.log(`🤬️: ${actual} !== ${expected}`);
};

let head = function(arr) {
  return arr[0];
};

assertEqual(head([5,4,1]),5);
assertEqual(head(['apple','cherry','chocolate']),'banana');
assertEqual(head([1]),1);
assertEqual(head([]),"whoa!");