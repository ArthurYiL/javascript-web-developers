var currency = require('./currency'); 
var MyProto = require('./proto');
//var MyProto = require('./prototwo');

console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50));

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.USToCanadian(30));

console.log(currency.myDuck("mickey"));

var myProto = new MyProto(5);
console.log("Adding and duplicating: " + myProto.addAndDuplicate(3));
