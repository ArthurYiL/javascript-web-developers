// this uses a file in the same directory
//var currency = require('./currency');

// and this uses a subdirectory, containing an index.js file, in the same directory
//var currency = require('./my_module');

// using directory with no index.js and package.json
//var currency = require('./dir_no_index');

// use node_modules under current directory
var currency = require('currency');

console.log('50 canadian dollars is US dollars:');
console.log(currency.canadianToUS(50));

console.log('30 US dollars is Canadian dollars:');
console.log(currency.USToCanadian(30));
