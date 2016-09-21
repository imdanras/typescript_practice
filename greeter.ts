document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //questions array
    var questionsArray = [
    { 'question' : 'Question #1: Who has hit the most home runs in MLB history?',
        'choices' : ['Babe Ruth', 'Ken Griffey Jr.', 'Barry Bonds', 'Hank Aaron'],
        'answer' : 'Barry Bonds',
        'tidbit' : 'Barry Bonds hit 762 home runs during his 22 year career.' },

    { 'question' : 'Question #2: During Mark McGwire\'s historic 1998 season, he hit 70 home runs.  Who hit the second most that year?',
        'choices' : ['Sammy Sosa', 'Ken Griffey Jr.', 'Pedro Cerrano', 'Barry Bonds'],
        'answer' : 'Sammy Sosa',
        'tidbit' : 'Sosa came in second with 66. Pedro Cerrano is a character in the movie "Major League."' },

    { 'question' : 'Question #3: Nolan Ryan has thrown the most career no-hitters with seven. Who has the second most?',
        'choices' : ['Tim Lincecum', 'Felix Hernandez', 'Randy Johnson', 'Sandy Koufax'],
        'answer' : 'Sandy Koufax',
        'tidbit' : 'Sandy Koufax threw four no-hitters in his career and famously refused to play on Yom Kippur during the 1965 World Series.' },

    { 'question' : 'Question #4: What was the final year that the Dodgers played in Brooklyn before moving to Los Angeles?',
        'choices' : ['1922', '1957', '1974', 'The Dodgers played in Brooklyn?'],
        'answer' : '1957',
        'tidbit' : 'They were originally called the "Dodgers" because of Brooklyn residents, in those days, having to dodge trolley cars in the street.' },

    { 'question' : 'Question #5: Which pitcher has the most career strikeouts in baseball history?',
        'choices' : ['Nolan Ryan', 'Randy Johnson', 'Pedro Martinez', 'Roger Clemens'],
        'answer' : 'Nolan Ryan',
        'tidbit' : 'Ryan struck out 5,714 batters during his 27 year career, over 800 more than second place Randy Johnson.' },

    { 'question' : 'Question #6: Who\'s on first?',
        'choices' : ['Who', 'What', 'I don\'t know', '(confused picture)'],
        'answer' : 'Who',
        'tidbit' : '<img src="https://i.ytimg.com/vi/ZwWD-cBpYpU/hqdefault.jpg">' },

    { 'question' : 'Question #7: The only jersey number retired by every MLB team is #42. Who wore this number?',
        'choices' : ['Rickey Henderson', 'Babe Ruth', 'Mickey Mantle', 'Jackie Robinson'],
        'answer' : 'Jackie Robinson',
        'tidbit' : 'Robinson was the first African American to play in the modern era and was inducted into the National Baseball Hall of Fame in 1962.' },

    { 'question' : 'Question #8: In what year did the Mariners begin play in Seattle?',
        'choices' : ['1977', '1995', '1950', '1900'],
        'answer' : '1977',
        'tidbit' : 'The Mariners originally played at the Kingdome before moving to Safeco Field in 1999.' },

    { 'question' : 'Question #9: In what year did the Cubs last win the World Series?',
        'choices' : ['Never', '1908', '1951', '2003'],
        'answer' : '1908',
        'tidbit' : 'The Cubs currently play at Wrigley Field, the second-oldest stadium in the MLB.'}
    ];

    var questionCounter: number = 0;
    var start = document.getElementById('start');
    var question = document.getElementById('question');
    var buttonA = document.getElementById('btn-A');
    var buttonB = document.getElementById('btn-B');
    
    //Hide buttons to start
    buttonA.style.visibility = 'hidden';
    buttonB.style.visibility = 'hidden';

    var questionDisplay = function() {
        buttonA.style.visibility = 'visible';
        buttonB.style.visibility = 'visible';
        question.textContent = questionsArray[questionCounter].question;
        buttonA.textContent = questionsArray[questionCounter].choices[0];
        buttonB.textContent = questionsArray[questionCounter].choices[1];
        if (questionCounter == questionsArray.length-1) {
            //eventually put function to either show correct answers number or simply restart quiz, but until then...
            questionCounter = 0;
        } else {
            questionCounter++;
        }
    }

    start.addEventListener('click', questionDisplay);




    

    // //playing with typescript. nothing to do with the quiz 
    // class Student {
    //     fullName: string;
    //     constructor(public firstName, public middleInitial, public lastName) {
    //         this.fullName = firstName + " " + middleInitial + " " + lastName;
    //     }
    // }

    // interface Person {
    //     firstName: string;
    //     lastName: string;
    // }

    // function greeter(person:Person) {
    //     return 'hello ' + person.firstName + ' ' + person.lastName;
    // }
    // var name = document.getElementById('name');
    // var user = new Student("Jane", "M.", "User");
    // name.innerHTML = greeter(user);
    // //end playtime
//DOMContentLoaded ending parentheses
});