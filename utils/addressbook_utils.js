module.exports = {
	checkEmpty:function(obj) {
		// return $.isEmptyObject(obj);
		if (obj === null || obj === undefined || obj == 'undefined' || obj === '' || obj == 'null' || obj.length == 0) {
			return true;
		}
		return false;
	},
	convertStringToDate : function (date){
		if(date instanceof Date){
			return date;
		}
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
		return new Date(parts[2],parts[1]-1,parts[0]);
	},
    formatDate: function(date){
        var month = date.getMonth()+1;
        while(month.toString().length<2){
            month = '0'+ month;
        }
        return date.getDate()+ '/' + month +'/' + date.getFullYear();
    },
    notifyOnConsole: function(message){
        console.info(message);
    }
}