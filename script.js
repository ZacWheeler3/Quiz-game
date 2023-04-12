var startQuizButtonElement = document.getElementById("start-button");
var questionContainerElement = document.getElementById("question-container");
var answerContainerElement = document.getElementById("answer-container");
var currentQuestion = 0;

var quizQuestions = [
    {
        questionText: 'Who is the author of The Lord of the Rings?',
        choices: ['Barack Obama', 'Chef Boyardee', 'J.R.R Tolkien', 'Alexander Dumas'],
        correctAnswer: 'J.R.R. Tolkien',
    },
    {
        questionText: 'Who created the One ring??',
        choices: ['Sauron', 'Frodo', 'Tom Brady', 'Jeff Bezos'],
        correctAnswer: 'Sauron',
    },
    {
        questionText: 'What was the name of the Mountain where the One ring was made?',
        choices: ['Mount Doom', 'Mount Everest', 'Backbone Mountain', 'Mount Fury'],
        correctAnswer: 'Mount Doom',

    },
    {
        questionText: 'How many companions joined The "Fellowship of the Ring?',
        choices: ['9', '3', '7', '14'],
        correctAnswer: '9',
    },
    {
        questionText: 'Who was Smeagols alter ego?',
        choices: ['Luke Skywalker', 'Clark Kent', 'Santa Claus', 'Gollum'],
        correctAnswer: 'Gollum',
    },
    {
        questionText: 'What is the fake name Frodo Baggins used as he left the Shire?',
        choices: ['GOAT', 'That Dude', 'Mr Underhill', 'Patrick Mahomes'],
        correctAnswer: 'Mr Underhill',
    },
    {
        questionText: 'What is the name of the pub in the Shire?',
        choices: ['The Green Dragon', 'Pattys Pub', 'The Prancing Pony', 'McDonalds'],
        correctAnswer: 'The Green Dragon',
    },
    {
        questionText: 'How many rings of power are in existence?',
        choices: ['1', '20', '4', '35'],
        correctAnswer: '20',
    },
    {
        questionText: 'Which character from the Lord of the Rings is NOT a hobbit?',
        choices: ['Frodo Baggins', 'Gimli', 'Samwise Gamgee', 'Bilbo Baggins'],
        correctAnswer: 'Gimli',
    },
    {
        questionText: 'How many black riders are there?',
        choices: ['6', '100', '5', '9'],
        correctAnswer: '9',
    },
];

function startQuiz() {
    console.log("I click the button");
};
console.log(startQuizButtonElement);
startQuizButtonElement.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("I click the button");
    startQuizButtonElement.style.display = "none";
    createQuizStage();
    createQuestionElements();
};
function createQuizStage() {
    var quizContainer = document.createElement("article");
    quizContainer.classList.add("quiz-container");
    document.body.appendChild(quizContainer)
};
function createQuestionElements(currentQuestionData) {
    // var currentQuestionText = currentQuestionData.question;
    var questionTextBox = document.createElement("h3");
    var choiceOne = document.createElement("button");
    var choiceTwo = document.createElement("button");
    var choiceThree = document.createElement("button");
    var choiceFour = document.createElement("button");
    var choiceContainer = document.createElement("section");
    // questionTextBox.textContent = quizQuestions[0].quiz - container;
    choiceOne.textContent = "choice 1";
    choiceTwo.textContent = "choice 2";
    choiceThree.textContent = "choice 3";
    choiceFour.textContent = "choice 4";
    var quizContainer = document.querySelector(".quiz-container").appendChild(questionTextBox);
    quizContainer.appendChild(choiceContainer);
    choiceContainer.appendChild(choiceOne);
    choiceContainer.appendChild(choiceTwo);
    choiceContainer.appendChild(choiceThree);
    choiceContainer.appendChild(choiceFour);
};
questionContainerElement.textContent = quizQuestions[0].questionText;

for (var i = 0; i < quizQuestions[0].choices.length; i++) {
    var newChoiceButton = document.createElement("button");
    newChoiceButton.textContent = quizQuestions[0].choices[i];
    choiceContainer.appendChild(newChoiceButton);



};








