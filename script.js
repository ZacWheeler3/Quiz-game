var currentQuestion = 0;
var timeLeft = 30;
var userScore = 0;

var questionsList = [
    {
        questionText: "Who is the author of The Lord of the Rings?",
        choices: ["Barack Obama", "Chef Boyardee", "J.R.R. Tolkien", "Alexander Dumas"],
        correctAnswer: "J.R.R. Tolkien",
    },
    {
        questionText: "Who created the One ring?",
        choices: ["Sauron", "Frodo", "Tom Brady", "Jeff Bezos"],
        correctAnswer: "Sauron",
    },
    {
        questionText: "What was the name of the Mountain where the One ring was forged?",
        choices: ["Mount Doom", "Mount Everest", "Backbone Mountain", "Mount Fury"],
        correctAnswer: "Mount Doom",
    },
    {
        questionText: "How many companions joined The Fellowship of the Ring?",
        choices: ["9", "3", "7", "14"],
        correctAnswer: "9",
    },
    {
        questionText: "Who was Smeagol's alter ego?",
        choices: ["Luke Skywalker", "Clark Kent", "Santa Claus", "Gollum"],
        correctAnswer: "Gollum",
    }
    //   {
    //     questionText: "What is the fake name Frodo Baggins used as he left the Shire?",
    //     choices: ["GOAT", "That dude", "Mr. Underhill", "Patrick Mahomes"],
    //     correctAnswer: "Mr. Underhill",
    //   },
    //   {
    //     questionText: "What is the name of the pub in the Shire?",
    //     choices: ["The Green Dragon", "Patty's Pub", "The Prancing Pony", "McDonald's"],
    //     correctAnswer: "The Green Dragon",
    //   },
    //   {
    //     questionText: "How many rings of power are in existence?",
    //     choices: ["1", "20", "4", "35"],
    //     correctAnswer: "20",
    //   },
    //   {
    //     questionText: "Which character from the Lord of the Rings is <strong>NOT</strong> a hobbit?",
    //     choices: ["Frodo Baggins", "Gimli", "Samwise Gamgee", "Bilbo Baggins"],
    //     correctAnswer: "Gimli",
    //   },
    //   {
    //     questionText: "How many black riders are there?",
    //     choices: ["6", "100", "5", "9"],
    //     correctAnswer: "9",
    //   }
];

var startQuizButtonElement = document.getElementById("start-button");
startQuizButtonElement.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("I click the button");
    startQuizButtonElement.style.display = "none";
    createQuestionElements(questionsList[currentQuestion]);
    var timeOut = setInterval(function () {
        timeLeft--;
        document.getElementById("timer-container").innerHTML = "Time left: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeOut);
            alert("Time's up!");
        }
    }, 1000);
}
function createQuizStage() {
    var quizContainer = document.createElement("article");
    quizContainer.classList.add("quiz-container");
    document.body.appendChild(quizContainer);
}
function createQuestionElements(currentQuestionData) {
    // Remove any existing question elements
    var quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = "";

    // Create elements for the current question
    var currentQuestionText = currentQuestionData.questionText;
    var questionTextBox = document.createElement("h3");
    var choiceOne = document.createElement("button");
    var choiceTwo = document.createElement("button");
    var choiceThree = document.createElement("button");
    var choiceFour = document.createElement("button");
    var choiceContainer = document.createElement("section");
    questionTextBox.textContent = currentQuestionText;
    choiceOne.textContent = currentQuestionData.choices[0];
    choiceTwo.textContent = currentQuestionData.choices[1];
    choiceThree.textContent = currentQuestionData.choices[2];
    choiceFour.textContent = currentQuestionData.choices[3];
    quizContainer.appendChild(questionTextBox);
    quizContainer.appendChild(choiceContainer);
    choiceContainer.appendChild(choiceOne);
    choiceContainer.appendChild(choiceTwo);
    choiceContainer.appendChild(choiceThree);
    choiceContainer.appendChild(choiceFour);

    choiceOne.addEventListener("click", function () {
        checkAnswer(choiceOne, currentQuestionData);
    });
    choiceTwo.addEventListener("click", function () {
        checkAnswer(choiceTwo, currentQuestionData);
    });
    choiceThree.addEventListener("click", function () {
        checkAnswer(choiceThree, currentQuestionData);
    });
    choiceFour.addEventListener("click", function () {
        checkAnswer(choiceFour, currentQuestionData);
    });
}
function checkAnswer(selectedChoice, currentQuestionData) {
    if (selectedChoice.textContent === currentQuestionData.correctAnswer) {
        console.log("Correct answer");
        userScore += 20;
    }
    currentQuestion++;
    if (currentQuestion < questionsList.length) {
        createQuestionElements(questionsList[currentQuestion]);
    } else {
        console.log("Quiz completed");
        displayScore();
    }
}
function displayScore() {
    var initials = prompt("Congratulations! You finished with a score of " + userScore + ". Please enter your initials to save your score:");
    localStorage.setItem(initials, userScore);
    window.location.href = "highscores.html";
};










