const quizData = [
    {
        question: "What does the `if` statement do in JavaScript?",
        answers: [
            "Executes code if a condition is true",
            "Executes code repeatedly",
            "Declares a variable",
            "Checks the data type of a value"
        ],
        correct: "Executes code if a condition is true"
    },
    {
        question: "How can you check for multiple conditions in JavaScript?",
        answers: [
            "Using if and else statements",
            "Using loops",
            "Using && and || operators",
            "Using switch statements only"
        ],
        correct: "Using && and || operators"
    },
    {
        question: "What is the syntax of the `else if` statement?",
        answers: [
            "else if (condition) { code }",
            "if else (condition) { code }",
            "elseif (condition) { code }",
            "else (condition) { code }"
        ],
        correct: "else if (condition) { code }"
    },
    {
        question: "What does the `switch` statement do?",
        answers: [
            "Tests a variable against a list of values and executes corresponding code",
            "Creates loops to iterate over values",
            "Declares variables",
            "Tests multiple conditions using &&"
        ],
        correct: "Tests a variable against a list of values and executes corresponding code"
    },
    {
        question: "Which of the following is NOT true about the `else` statement?",
        answers: [
            "It must always follow an `if` or `else if` statement",
            "It executes if all preceding conditions are false",
            "It checks a condition",
            "It can appear after an `if` statement"
        ],
        correct: "It checks a condition"
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
