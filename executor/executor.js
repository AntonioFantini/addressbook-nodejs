var extractor = require('./../persistence/persistence.js');
var operations = require('./operations.js');
module.exports = {
	execute: function(operation){
		var people = extractor.getPeople();
		if(operation == operations.operationOldest){
			return sortPeopleByDate(people);
			
		}else{
			return sortPeopleAlphabetically(people, operation==operations.operationSex);
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

function sortPeopleAlphabetically(people, sexFlag){
	var array = [];
	for (var i=0; i< people.length; i++){
				var person = people[i];
				array.push(person);
	}
	array.sort(function(a,b){
	var c = null;
	var d = null;
    if(sexFlag){
        c = a.sex;
        d = b.sex;
    }else{
        c = a.name;
        d = b.name;
    }
        
	if (c < d) //sort string ascending
      return -1;
    if (c > d)
      return 1;
    return 0; //default return value (no sorting)

	});
	return array;
}
