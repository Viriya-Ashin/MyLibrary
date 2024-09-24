const quizData = [
    {
        question: "What is a data attribute in HTML?",
        answers: [
            "A custom attribute prefixed with data-",
            "An element-specific attribute",
            "A way to store inline CSS",
            "A method to modify HTML tags"
        ],
        correct: "A custom attribute prefixed with data-"
    },
    {
        question: "Which JavaScript method is used to access a data attribute?",
        answers: [
            "getAttribute()",
            "querySelector()",
            "setData()",
            "getElementByData()"
        ],
        correct: "getAttribute()"
    },
    {
        question: "How do you access a data attribute in JavaScript using dataset?",
        answers: [
            "element.dataset",
            "element.dataset.<name>",
            "element.getDataAttribute()",
            "element.<name>"
        ],
        correct: "element.dataset.<name>"
    },
    {
        question: "How can you modify a data attribute in JavaScript?",
        answers: [
            "Using dataset.property = 'value'",
            "Using setAttribute('data-*', 'value')",
            "Using element.data-* = 'value'",
            "Both A and B"
        ],
        correct: "Both A and B"
    },
    {
        question: "Which data type do data attributes store?",
        answers: [
            "Only strings",
            "Any data type",
            "Numbers and strings",
            "Booleans and strings"
        ],
        correct: "Only strings"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const nextBtn = document.getElementById('nextBtn');
const resultContainer = document.getElementById('result');

// Function to load a quiz question dynamically
function loadQuestion() {
    quizContainer.innerHTML = ''; // Clear previous content

    const currentQuestion = quizData[currentQuestionIndex];

    const questionElement = document.createElement('h3');
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    quizContainer.appendChild(questionElement);

    currentQuestion.answers.forEach(answer => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'question';
        input.value = answer;

        label.appendChild(input);
        label.append(answer);
        quizContainer.appendChild(label);
        quizContainer.appendChild(document.createElement('br'));
    });

    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.textContent = 'Submit';
    }
}

// Function to calculate the score
function calculateScore() {
    const selectedAnswer = document.querySelector('input[name="question"]:checked');
    if (selectedAnswer && selectedAnswer.value === quizData[currentQuestionIndex].correct) {
        score++;
    }
}

// Handle next button click
nextBtn.addEventListener('click', () => {
    calculateScore();

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = ''; // Clear quiz area
        resultContainer.textContent = `You scored ${score} out of ${quizData.length}.`;
        nextBtn.style.display = 'none'; // Hide button after submission
    }
});

// Load the first question when the page loads
window.onload = loadQuestion;
