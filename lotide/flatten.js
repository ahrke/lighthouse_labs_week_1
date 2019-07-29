let flatten = function(arr) {
  let arrOut = [];

  if (arr && !Array.isArray(arr)) {
    return arr
  }

  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      arrOut = arrOut.concat(flatten(ele));
    } else {
      arrOut.push(ele);
    }
  })

  return arrOut;
};

module.exports = (
  flatten
)