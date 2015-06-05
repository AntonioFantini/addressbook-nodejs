var executor = require('./executor/executor.js');
var utils = require('./utils/addressbook_utils');
var operations = require('./executor/operations.js');
var instructionsMessage = 'Please provide an argument, 0 to sort by date of birth, 1 to sort by name, 2 to sort by sex'

var arg = process.argv[2];
if(utils.checkEmpty(arg) || parseInt(arg) <0 || parseInt(arg)>2){
	utils.notifyOnConsole(instructionsMessage);
}else if(parseInt(arg) == 0){
	var retval = executor.execute(operations.operationOldest);
	executor.printOutput(retval);
}else if (parseInt(arg) == 1){
    var retval = executor.execute(operations.operationName);
	executor.printOutput(retval);
}else if (parseInt(arg) == 2){
    var retval = executor.execute(operations.operationSex);
	executor.printOutput(retval);
}