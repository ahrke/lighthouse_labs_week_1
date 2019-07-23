const assertArraysEqual = require('./assertArraysEqual').assertArraysEqual;

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
