let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑️: ${actual} === ${expected}`)
    return true;
  } else {
    console.log(`🤬️: ${actual} !== ${expected}`);
    return false;
  }
};


module.exports = {
  assertEqual
}