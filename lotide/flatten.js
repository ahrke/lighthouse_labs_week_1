let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

let assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ?
    console.log(`🤑️: ${arr1} === ${arr2}`)
    : console.log(`🤬️: ${arr1} !== ${arr2}`);
};

let flatten = function(arr) {
  let arrOut = [];

  for (let ele of arr) {
    (Array.isArray(ele)) ?
      (ele.forEach(j => arrOut.push(j)))
      : arrOut.push(ele);
  }

  return arrOut;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,[6]]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4]);
assertArraysEqual(flatten([1, 2, [3, 4]]), []);
assertArraysEqual(flatten([["a", 1, 2], [3, 4, 5], [6]]), ["a",1,2,3,4,5,6]);
