var startQuiz = document.getElementById("start-button");
var quizContainer = document.getElementById("#quiz-container");
var timerElement = document.getElementById("#timer");
var submitButton = document.getElementById("#submit-btn");
var timeLeft = 30;
var timerInterval;

function startQuiz() {
    timerInterval = set(updateTime, 1000);
    console.log('Start Quiz');
}



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

{
question: 'Who created the One ring??',
choices: ['Sauron', 'Frodo', 'Tom Brady', 'Jeff Bezos'],
answer: 'Sauron'
},

{
    question: 'What was the name of the Mountain where the One ring was made?',
    choices: ['Mount Doom', 'Mount Everest', 'Backbone Mountain', 'Mount Fury'],
    answer: 'Mount Doom'
    
    },

    {
        question: 'How many companions joined The "Fellowship of the Ring?',
        choices: ['9', '3', '7', '14'],
        answer: '9'
    },
        
    {
        question: 'Who was Smeagols alter ego?',
        choices: ['Luke Skywalker', 'Clark Kent', 'Santa Claus', 'Gollum'],
        answer: 'Gollum'
    },

    
    {
        question: 'What is the fake name Frodo Baggins used as he left the Shire?',
        choices: ['GOAT', 'That Dude', 'Mr Underhill', 'Patrick Mahomes'],
        answer: 'Mr Underhill'
    },

    

    {
        question: 'What is the name of the pub in the Shire?',
        choices: ['The Green Dragon', 'Pattys Pub', 'The Prancing Pony', 'McDonalds'],
        answer: 'The Green Dragon'
    },

       {
        question: 'How many rings of power are in existence?',
        choices: ['1', '20', '4', '35'],
        answer: '20'
    },

       {
        question: 'Which character from the Lord of the Rings is NOT a hobbit?',
        choices: ['Frodo Baggins', 'Gimli', 'Samwise Gamgee', 'Bilbo Baggins'],
        answer: 'Gimli'
    },

        {
        question: 'How many black riders are there?',
        choices: ['6', '100', '5', '9'],
        answer: '9'
    },
   
];


