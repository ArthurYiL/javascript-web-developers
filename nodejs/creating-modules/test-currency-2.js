var Currency = require('./currency-2');
var canadianDollar = 0.91;

var currency = new Currency(canadianDollar);
console.log('50 canadian dollars is US dollars:' + currency.canadianToUS(50));

