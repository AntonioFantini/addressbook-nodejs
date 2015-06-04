var executor = require('./executor.js');
var utils = require('./utils/addressbook_utils')
var arg = process.argv[2];
console.log('arg: '+ arg);
if(utils.checkEmpty(arg)){
	executor.execute();
}else if(arg == '0'){
	executor.execute(executor.operationOldest);
}