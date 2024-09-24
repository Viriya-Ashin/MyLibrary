const quizData = [
    {
        question: "What class is used for margin spacing in Bootstrap?",
        answers: [
            ".margin",
            ".m-*",
            ".spacing",
            ".space-*"
        ],
        correct: ".m-*"
    },
    {
        question: "How can you change the text color in Bootstrap?",
        answers: [
            ".text-*",
            ".color-*",
            ".textColor",
            ".color"
        ],
        correct: ".text-*"
    },
    {
        question: "Which utility class would you use to hide an element on small screens only?",
        answers: [
            ".d-none",
            ".d-sm-none",
            ".d-hide-sm",
            ".visible-sm"
        ],
        correct: ".d-sm-none"
    },
    {
        question: "What does the .bg-* class do?",
        answers: [
            "Changes background color",
            "Sets margin",
            "Changes text color",
            "Sets padding"
        ],
        correct: "Changes background color"
    },
    {
        question: "Which utility class adjusts the display property of an element?",
        answers: [
            ".d-*",
            ".display-*",
            ".visibility-*",
            ".show-*"
        ],
        correct: ".d-*"
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
