module.exports.createPerson = function(name, sex, dob){
	return new person(name, sex, dob);
};

function person(name, sex, dob){	
	this.name=name;
	this.sex=sex;
	this.dob=convertStringToDate(dob);
	this.print= function(){
		console.log('Name: '+this.name);
		console.log('Sex: '+this.sex);
		console.log('Date of birth: '+this.dob);
	}	
}

function convertStringToDate(date){
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