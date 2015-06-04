var utils = require('./utils/addressbook_utils')
module.exports.createPerson = function(name, sex, dob){
	return new person(name, sex, dob);
};

function person(name, sex, dob){	
	this.name=name;
	this.sex=sex;
	this.dob=utils.convertStringToDate(dob);
	this.print= function(){
		console.log('Name: '+this.name);
		console.log('Sex: '+this.sex);
		console.log('Date of birth: '+this.dob);
	}	
}