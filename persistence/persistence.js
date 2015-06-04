var fs = require('fs');
var personFactory = require('./../model/person.js');
module.exports = {
	getPeople: function(operation){
		return retrievePeople();
	}

}

function retrievePeople(){
    var people = JSON.parse(fs.readFileSync('resources/AddressBook.json','utf8'));  
    var array = [];
    for (var i=0; i< people.length; i++){
        var person = personFactory.createPerson(people[i].name, people[i].sex, people[i].dob);
        array.push(person);
    }
    return array;
}