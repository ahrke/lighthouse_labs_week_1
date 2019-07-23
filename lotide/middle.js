let eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

let assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1,arr2) ?
    console.log(`🤑️: ${arr1} === ${arr2}`)
    : console.log(`🤬️: ${arr1} !== ${arr2}`);
};

let middle = function(arr) {
  if (arr.length < 3) return [];

  let arrOut = [];
  let midpoint = Math.floor(arr.length / 2);

  (arr.length % 2 === 0) ?
    arrOut.push(arr[midpoint - 1], arr[midpoint])
    : arrOut.push(arr[midpoint]);

  return arrOut;
};

assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2,3,4,5]), [3]);