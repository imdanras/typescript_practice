document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    var name = document.getElementById('name');
    var Student = (function () {
        function Student(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
        return Student;
    }());
    function greeter(person) {
        return 'hello ' + person.firstName + ' ' + person.lastName;
    }
    var user = new Student("Jane", "M.", "User");
    name.innerHTML = greeter(user);
    //DOMContentLoaded ending parentheses
});
