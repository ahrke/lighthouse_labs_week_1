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

let without = function(source, itemsToRemove) {
  let arrOut = [];
  for (let ele of source) {
    if (!itemsToRemove.includes(ele)) {
      arrOut.push(ele);
    }
  }

  return arrOut;
};

assertArraysEqual(without(["hello", "world", "lighthouse"], ['lighthouse']), ["hello", "world", "lighthouse"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ['lighthouse']), ["hello", "world"]);
assertArraysEqual(without([1, 2, 3, 4, 5, 6, 7, "ham", "tiger palm"], [2,5,'ham']), [1, 3, 4, 6, 7, "tiger palm"]);
assertArraysEqual(without([4, 5, 6, 7, "ham", "tiger palm"], []), [4, 5, 6, 7, "ham", "tiger palm"]);