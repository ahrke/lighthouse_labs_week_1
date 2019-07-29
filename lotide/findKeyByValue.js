const findKeyByValue = function(obj, value) {
  for (let currKey of Object.keys(obj)) {
    if (obj[currKey] === value) return currKey;
  }
  return undefined;
};


module.exports = {
  findKeyByValue
}
