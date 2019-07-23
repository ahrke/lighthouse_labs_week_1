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
