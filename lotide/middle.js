let middle = function(arr) {
  if (arr.length < 3) return [];

  let arrOut = [];
  let midpoint = Math.floor(arr.length / 2);

  (arr.length % 2 === 0) ?
    arrOut.push(arr[midpoint - 1], arr[midpoint])
    : arrOut.push(arr[midpoint]);

  return arrOut;
};

module.exports = {
  middle
}