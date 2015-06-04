module.exports = {
	checkEmpty:function(obj) {
		// return $.isEmptyObject(obj);
		if (obj === null || obj === undefined || obj == 'undefined' || obj === '' || obj == 'null' || obj.length == 0) {
			console.log('true');
			return true;
		}
		console.log('false');
		return false;
	},
	convertStringToDate : function (date){
	var parts;
	if(date.indexOf('/') > -1){
		parts =date.split('/');
	}else if(date.indexOf('.') > -1){
		parts =date.split('.');
	}else if(date.indexOf('-') > -1){
		parts =date.split('-');
	}else if(date.indexOf('\\') > -1){
		parts =date.split('\\');
	}
	//please put attention to the month (parts[0]), Javascript counts months from 0:
	// January - 0, February - 1, etc
	return new Date(parts[2],parts[0]-1,parts[1]);
}
}