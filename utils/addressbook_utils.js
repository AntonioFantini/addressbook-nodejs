module.exports = {
	checkEmpty:function(obj) {
		// return $.isEmptyObject(obj);
		if (obj === null || obj === undefined || obj == 'undefined' || obj === '' || obj == 'null' || obj.length == 0) {
			console.log('true');
			return true;
		}
		console.log('false');
		return false;
	}
}