var executor = require('./executor.js');
var utils = require('./utils/addressbook_utils');
var arg = process.argv[2];
if(utils.checkEmpty(arg)){
	executor.execute('');
}else if(+arg == 0){
	executor.execute(global.operationOldest);
}