var extractor = require('./../persistence/persistence.js');
var operations = require('./operations.js');
module.exports = {
	execute: function(operation){
		var people = extractor.getPeople();
		if(operation == operations.operationOldest){
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

function sortByName(people){
	var array = [];
	for (var i=0; i< people.length; i++){
				var person = people[i];
				array.push(person);
	}
	array.sort(function(a,b){
	var c = a.name;
	var d = b.name;
	if (a < b) //sort string ascending
      return -1;
    if (a > b)
      return 1;
 return 0; //default return value (no sorting)

	});
	return array;
}
