const quizData = [
    {
        question: "What does setTimeout() do in JavaScript?",
        answers: [
            "Executes a function after a delay",
            "Executes a function repeatedly",
            "Clears a timeout",
            "Executes a function immediately"
        ],
        correct: "Executes a function after a delay"
    },
    {
        question: "How do you stop an interval that was created with setInterval()?",
        answers: [
            "stopInterval()",
            "clearInterval()",
            "stopTimeout()",
            "clearTimeout()"
        ],
        correct: "clearInterval()"
    },
    {
        question: "What happens if you call setInterval() with a delay of 0 milliseconds?",
        answers: [
            "The function will run once",
            "The function will run immediately and only once",
            "The function will run as often as possible",
            "It will throw an error"
        ],
        correct: "The function will run as often as possible"
    },
    {
        question: "Which method is used to stop a timeout set with setTimeout()?",
        answers: [
            "clearTimeout()",
            "stopTimeout()",
            "stopInterval()",
            "clearInterval()"
        ],
        correct: "clearTimeout()"
    },
    {
        question: "What does setInterval() do?",
        answers: [
            "Executes a function after a specified delay",
            "Executes a function repeatedly with a specified delay between each call",
            "Stops a timeout",
            "Creates an infinite loop"
        ],
        correct: "Executes a function repeatedly with a specified delay between each call"
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
