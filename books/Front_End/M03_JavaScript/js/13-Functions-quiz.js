const quizData = [
    {
        question: "What is the correct syntax for defining a JavaScript function?",
        answers: [
            "function myFunction() { }",
            "function:myFunction { }",
            "def myFunction() { }",
            "function = myFunction() { }"
        ],
        correct: "function myFunction() { }"
    },
    {
        question: "Which keyword is used to return a value from a function?",
        answers: [
            "return",
            "break",
            "continue",
            "yield"
        ],
        correct: "return"
    },
    {
        question: "How can you call a function named 'myFunction' in JavaScript?",
        answers: [
            "call function myFunction",
            "myFunction()",
            "run myFunction()",
            "execute myFunction()"
        ],
        correct: "myFunction()"
    },
    {
        question: "Which of the following is NOT a valid way to define a function?",
        answers: [
            "function myFunc() { }",
            "const myFunc = function() { }",
            "let myFunc = () => { }",
            "def myFunc() { }"
        ],
        correct: "def myFunc() { }"
    },
    {
        question: "What is a higher-order function in JavaScript?",
        answers: [
            "A function that returns another function or accepts functions as arguments",
            "A function that runs at a higher priority",
            "A function that only runs in strict mode",
            "A function that is defined using arrow syntax"
        ],
        correct: "A function that returns another function or accepts functions as arguments"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const nextBtn = document.getElementById('nextBtn');
const resultContainer = document.getElementById('result');

// Function to load a quiz question
function loadQuestion() {
    quizContainer.innerHTML = ''; // Clear previous question

    const currentQuestion = quizData[currentQuestionIndex];

    const questionTitle = document.createElement('h3');
    questionTitle.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    quizContainer.appendChild(questionTitle);

    currentQuestion.answers.forEach(answer => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question`;
        input.value = answer;

        label.appendChild(input);
        label.append(answer);
        quizContainer.appendChild(label);
        quizContainer.appendChild(document.createElement('br'));
    });

    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.textContent = "Submit";
    }
}

// Function to calculate the score
function calculateScore() {
    const selectedAnswer = document.querySelector(`input[name="question"]:checked`);
    if (selectedAnswer && selectedAnswer.value === quizData[currentQuestionIndex].correct) {
        score++;
    }
}

// Handle the next button click
nextBtn.addEventListener('click', () => {
    calculateScore();

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = '';
        resultContainer.textContent = `You scored ${score} out of ${quizData.length}.`;
        nextBtn.style.display = 'none'; // Hide the next button after submitting
    }
});

// Load the first question when the page loads
window.onload = loadQuestion;
