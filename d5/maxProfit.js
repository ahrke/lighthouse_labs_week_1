// [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because if you bought the 
// stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit
//  that could be made. If no profit could have been made, return -1.

// get all possible pairs
//    iterate through array
//    slice rest of array
//    compare selected element with each item in sliced array
//    calculateProfit() place result in array
//    compare for largest profit (sort().reverse() ?)
// return pair and profit

// recursion try
// base case: when array to compare only has two items
// recursive case: there are more than two available stock dates

const maxProfit = (stocks) => {
  let highest = -1;

  for (let i = 0; i < stocks.length; i++) {
    let highestInArr = mostProfitInArr(stocks.slice(i));
    highestInArr > highest
      ? highest = highestInArr
      : highest
  }

  return highest;
}

const mostProfitInArr = (arr) => {
  let toCompare = arr.splice(1);
  let base = arr[0];
  let highest = 0;

  toCompare.forEach(value => {
    if (value - base > highest) {
      highest = value - base;
    } 
  })

  return highest;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]))

// const maxProfit = (stocks) => {
  
// }

// maxProfit([45, 24, 35, 31, 40, 38, 11])  // 16