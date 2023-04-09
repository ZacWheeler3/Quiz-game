var quizContainer = document.getElementById("quiz-container");
var questionContainer =
var answerContainer =
var timerElement = document.getElementById("timer");
var submitButton = document.getElementById("submit-btn");

//maybe add a var correctAnswer?

var timeLeft = 30;
var timerId;

// function displayQuestion() {
//         questions.forEach(question => {
    //   question.style.display = 'none';
//     });

function startTimer() {
    timerId =setInterval
}

var quizQuestions = [
    {
question: 'Who is the author of The Lord of the Rings?',
answer: [
    { text: 'Barack Obama', correct: false},
    { text: 'Chef Boyardee', correct: false},
    { text: 'J.R.R. Tolkien', correct: true},
    { text: 'Alexander Dumas', correct: false},
]
},
{
question: 'Who created the One ring??',
answer: [
        { text: 'Sauron', correct: true},
        { text: 'Frodo', correct: false},
        { text: 'Tom Brady', correct: false},
        { text: 'Jeff Bezos', correct: false}, 
]   
},
{
    question: 'What was the name of the Mountain where the One ring was made?',
    answer: [
        { text: 'Mount Doom', correct: true},
        { text: 'Mount Everest', correct: false},
        { text: 'Backbone Mountain', correct: false},
        { text: 'Mount Fury', correct: false},
    ]
    },
    {
        question: 'How many companions joined The "Fellowship of the Ring?',
        answer: [
            { text: 'Barack Obama', correct: false},
            { text: 'Chef Boyardee', correct: false},
            { text: 'J.R.R. Tolkien', correct: true},
            { text: 'Alexander Dumas', correct: false},
        ]
        },
    {
        question: 'Who was Smeagols alter ego?',
        answer: [
            { text: 'Barack Obama', correct: false},
            { text: 'Chef Boyardee', correct: false},
            { text: 'J.R.R. Tolkien', correct: true},
            { text: 'Alexander Dumas', correct: false},
    ]
    },
    




];