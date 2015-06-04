var extractor = require('./../persistence/persistence.js');

global.operationOldest='OLDEST';
module.exports = {
	execute: function(operation){
		var people = extractor.getPeople();
		if(operation == global.operationOldest){
			var elaborated = sortPeopleByDate(people);
			return elaborated;			
		}else{
			for (var i=0; i< people.length; i++){
				var person = people[i];
				person.print();
			}
		}
	},
	printOutput: function(people){
		for (var i=0; i< people.length; i++){
				var person = people[i];
				person.print();
		}
	}

}

function sortPeopleByDate(people){
	var array = [];
	for (var i=0; i< people.length; i++){
				var person = people[i];
				array.push(person);
	}
	array.sort(function(a,b){
	var c = a.dob.getTime();
	var d = b.dob.getTime();
	return c-d;
	});
	return array;
}
