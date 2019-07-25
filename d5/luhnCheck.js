const luhnCheck = (numToVerify) => {
  if (typeof numToVerify !== 'number') return false;
  let nonCheckDigitSum = 0;

  let num = String(numToVerify).split('').map(c => Number(c));
  let alt = true;

  for (let i = (num.length - 2); i >= 0; i--) {
    if (alt) {
      nonCheckDigitSum += luhnNumForSum(num[i]);
      alt = false;
    } else {
      nonCheckDigitSum += num[i];
      alt = true
    }
  }

  return ((nonCheckDigitSum * 9) % 10) === num[num.length - 1]

}

const luhnNumForSum = (num) => {
  let result = num * 2;
  return result > 9 
    ? result - 9
    : result
}

console.log(luhnCheck(79927398713));