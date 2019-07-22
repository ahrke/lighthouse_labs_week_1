let args = require('yargs').argv._;
let sum = 0;

args.forEach(num => {
  sum += num;
});

console.log('the total sum is: ' + sum);