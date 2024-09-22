const quizData = [
    {
        question: "What CSS property is used to create a flex container?",
        answers: ["display: grid", "display: block", "display: flex", "display: inline"],
        correct: "display: flex"
    },
    {
        question: "Which property defines the direction in which flex items are placed in the flex container?",
        answers: ["flex-grow", "flex-direction", "justify-content", "align-items"],
        correct: "flex-direction"
    },
    {
        question: "What is the default value of 'flex-direction'?",
        answers: ["row", "column", "row-reverse", "column-reverse"],
        correct: "row"
    },
    {
        question: "Which property is used to align items vertically in a flex container?",
        answers: ["align-items", "justify-content", "flex-wrap", "flex-basis"],
        correct: "align-items"
    },
    {
        question: "Which property controls how the remaining space is distributed among flex items?",
        answers: ["flex-grow", "flex-shrink", "flex-basis", "order"],
        correct: "flex-grow"
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
