var executor = require('./executor/executor.js');
var utils = require('./utils/addressbook_utils');
var operations = require('./executor/operations.js');

var arg = process.argv[2];
if(utils.checkEmpty(arg)){
	executor.execute('');
}else if(parseInt(arg) == 0){
	var retval = executor.execute(operations.operationOldest);
	executor.printOutput(retval);
}