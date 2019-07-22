'use strict';

for(let i = 0; i < process.argv.length; i++) {
  console.log(i + ' -> ' + process.argv[i])
}

let args = require('yargs').argv;

console.log(args.name)