let assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`🤑️: ${actual} === ${expected}`)
    : console.log(`🤬️: ${actual} !== ${expected}`);
};


module.exports = {
  assertEqual
}