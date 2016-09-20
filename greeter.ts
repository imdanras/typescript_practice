document.addEventListener("DOMContentLoaded", function(event) {
console.log("DOM fully loaded and parsed");

var name = document.getElementById('name');

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person:Person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}

var user = new Student("Jane", "M.", "User");

name.innerHTML = greeter(user);

//DOMContentLoaded ending parentheses
});