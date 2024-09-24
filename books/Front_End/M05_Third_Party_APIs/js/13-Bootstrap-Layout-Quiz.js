const quizData = [
    {
        question: "What is the main purpose of Bootstrap's grid system?",
        answers: [
            "To create responsive layouts",
            "To add CSS styles",
            "To handle JavaScript events",
            "To manage user authentication"
        ],
        correct: "To create responsive layouts"
    },
    {
        question: "Which class is used to create a row in Bootstrap?",
        answers: [
            ".container",
            ".row",
            ".column",
            ".grid"
        ],
        correct: ".row"
    },
    {
        question: "How do you specify the number of columns in Bootstrap?",
        answers: [
            "By using .col-* classes",
            "By using .grid-* classes",
            "By setting width percentages",
            "By using CSS flex properties"
        ],
        correct: "By using .col-* classes"
    },
    {
        question: "What class is used to create a container in Bootstrap?",
        answers: [
            ".wrapper",
            ".container",
            ".box",
            ".content"
        ],
        correct: ".container"
    },
    {
        question: "Which Bootstrap utility class is used for margin?",
        answers: [
            ".padding",
            ".margin",
            ".m-*",
            ".gutter-*"
        ],
        correct: ".m-*"
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

    const questionElement = document.createElement('h4');
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
