var quizContainer = document.getElementById("quiz-container");
// var questionContainer =
// var answerContainer =
var timerElement = document.getElementById("timer");
var submitButton = document.getElementById("submit-btn");


//maybe add a var correctAnswer?

var timeLeft = 30;
var timerId;

// function displayQuestion() {
//         questions.forEach(question => {
    //   question.style.display = 'none';
//     });

var quizQuestions = [
    {
question: 'Who is the author of The Lord of the Rings?',
choices: ['Barack Obama', 'Chef Boyardee', 'J.R.R Tolkien', 'Alexander Dumas'],
answer: 'J.R.R. Tolkien'
    },
//Original idea in green
// [
//     { text: 'Barack Obama', correct: false},
//     { text: 'Chef Boyardee', correct: false},
//     { text: 'J.R.R. Tolkien', correct: true},
//     { text: 'Alexander Dumas', correct: false},
// ]
{
question: 'Who created the One ring??',
choices: ['Sauron', 'Frodo', 'Tom Brady', 'Jeff Bezos'],
answer: 'Sauron'
},

//         { text: 'Sauron', correct: true},
//         { text: 'Frodo', correct: false},
//         { text: 'Tom Brady', correct: false},
//         { text: 'Jeff Bezos', correct: false}, 
// ]   
// },
{
    question: 'What was the name of the Mountain where the One ring was made?',
    choices: ['Mount Doom', 'Mount Everest', 'Backbone Mountain', 'Mount Fury'],
    answer: 'Mount Doom'
    //     { text: 'Mount Doom', correct: true},
    //     { text: 'Mount Everest', correct: false},
    //     { text: 'Backbone Mountain', correct: false},
    //     { text: 'Mount Fury', correct: false},
    // ]
    },

    {
        question: 'How many companions joined The "Fellowship of the Ring?',
        choices: ['9', '3', '7', '14'],
        answer: '9'
    },
        //     { text: '9', correct: true},
        //     { text: '3', correct: false},
        //     { text: '7', correct: false},
        //     { text: '14', correct: false},
        // ]
        // },
    {
        question: 'Who was Smeagols alter ego?',
        choices: ['Luke Skywalker', 'Clark Kent', 'Santa Claus', 'Gollum'],
        answer: 'Gollum'
    },

    //         { text: 'Luke Skywalker', correct: false},
    //         { text: 'Clark Kent', correct: false},
    //         { text: 'Santa Claus', correct: false},
    //         { text: 'Gollum', correct: true},
    // ]
    // },

    {
        question: 'What is the fake name Frodo Baggins used as he left the Shire?',
        choices: ['GOAT', 'That Dude', 'Mr Underhill', 'Patrick Mahomes'],
        answer: 'Mr Underhill'
    },

    //         { text: 'GOAT', correct: false},
    //         { text: 'That Dude', correct: false},
    //         { text: 'Mr. Underhill', correct: true},
    //         { text: 'Patrick Mahomes', correct: false},
    // ]
    // },

    {
        question: 'What is the name of the pub in the Shire?',
        choices: ['The Green Dragon', 'Pattys Pub', 'The Prancing Pony', 'McDonalds'],
        answer: 'The Green Dragon'
    },

    //         { text: 'The Green Dragon', correct: true},
    //         { text: 'Pattys Pub', correct: false},
    //         { text: 'The Prancing Pony', correct: false},
    //         { text: 'McDonalds', correct: false},
    // ]
    // },

    {
        question: 'How many rings of power are in existence?',
        choices: ['1', '20', '4', '35'],
        answer: '20'
    },

    //         { text: '1', correct: false},
    //         { text: '20', correct: true},
    //         { text: '4', correct: false},
    //         { text: '35', correct: false},
    // ]
    // },

    {
        question: 'Which character from the Lord of the Rings is NOT a hobbit?',
        choices: ['Frodo Baggins', 'Gimli', 'Samwise Gamgee', 'Bilbo Baggins'],
        answer: 'Gimli'
    },

    //         { text: 'Frodo Baggins', correct: false},
    //         { text: 'Gimli', correct: true},
    //         { text: 'Samwise Gamgee', correct: false},
    //         { text: 'Bilbo Baggins', correct: false},
    // ]
    // },

    {
        question: 'How many black riders are there?',
        choices: ['6', '100', '5', '9'],
        answer: '9'
    },
    //         { text: '6', correct: false},
    //         { text: '100', correct: false},
    //         { text: '5', correct: true},
    //         { text: '9', correct: true},
    // ]
    // },
];


