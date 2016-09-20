document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
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
    document.body.innerHTML = greeter(user);
    //DOMContentLoaded ending parentheses
});
