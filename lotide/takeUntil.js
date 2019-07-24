const assertArraysEqual = require('./assertArraysEqual').assertArraysEqual;

const takeUntil = function(array, callback) {
  let finished = false;
  let arrOut = [];

  for (let i of array) {
    if (callback(i)) break;
    arrOut.push(i);
  }

  return arrOut;
}

let sample = [1,2,3,4,5,6,7,8];

// assertArraysEqual(takeUntil([1,2,3,4,5,6,7,8], x => x > 6), [1,2,3,4,5,6])
// assertArraysEqual(takeUntil([1,2,3,4,5,6,7,8], x => x === 6), [1,2,3,4,5])
// assertArraysEqual(takeUntil(["the","time","to","dance","is","nooooow","or","....","it's","not"], x => x === "or"), ["the","time","to","dance","is","nooooow"])