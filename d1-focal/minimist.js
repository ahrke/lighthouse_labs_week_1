'use strict';

var args = require('minimist')(process.argv.slice(2), {
  default: {
    port: 8080
  }
})

console.log(args)