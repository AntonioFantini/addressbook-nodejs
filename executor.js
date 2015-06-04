var fs = require('fs');
var personFactory = require('./person.js');
global.operationOldest='OLDEST';
module.exports = {
	execute: function(operation){
		var people = JSON.parse(fs.readFileSync('AddressBook.json','utf8'));
		if(operation == global.operationOldest){
			var elaborated = sortPeopleByDate(people);
			return elaborated;			
		}else{
			for (var i=0; i< people.length; i++){
				var person = personFactory.createPerson(people[i].name, people[i].sex, people[i].dob);
				person.print();
			}
		}
	},
	printOutput: function(people){
		for (var i=0; i< people.length; i++){
				var person = personFactory.createPerson(people[i].name, people[i].sex, people[i].dob);
				person.print();
		}
	}

}

function sortPeopleByDate(people){
	var array = [];
	for (var i=0; i< people.length; i++){
				var person = personFactory.createPerson(people[i].name, people[i].sex, people[i].dob);
				array.push(person);
	}
	array.sort(function(a,b){
	var c = a.dob.getTime();
	var d = b.dob.getTime();
	return c-d;
	});
	return array;
}
