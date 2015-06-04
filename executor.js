var fs = require('fs');
var personFactory = require('./person.js');
global.operationOldest='OLDEST',

module.exports = {
	execute: function(operation){
		var people = JSON.parse(fs.readFileSync('AddressBook.json','utf8'));
		if(operation === operationOldest){
			console.log(operationOldest);
		}else{
			for (var i=0; i< people.length; i++){
				var person = personFactory.createPerson(people[i].name, people[i].sex, people[i].dob);
				person.print();
			}
		}
	}

}