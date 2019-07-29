let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (typeof arr1 !== typeof arr2) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) return false; 
    } 
    else if (arr1[i] !== arr2[i]) return false; 
  }
  return true;
};


module.exports = {
  eqArrays
}