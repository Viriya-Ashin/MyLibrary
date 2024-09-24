const quizData = [
    {
        question: "What is localStorage in JavaScript?",
        answers: [
            "A method to store data across page reloads",
            "A way to store data that is cleared when the browser is closed",
            "A type of server storage",
            "A temporary cache for JavaScript files"
        ],
        correct: "A method to store data across page reloads"
    },
    {
        question: "Which method is used to store data in localStorage?",
        answers: [
            "localStorage.setItem()",
            "localStorage.saveData()",
            "localStorage.store()",
            "localStorage.putItem()"
        ],
        correct: "localStorage.setItem()"
    },
    {
        question: "How can you retrieve an item from localStorage?",
        answers: [
            "localStorage.getItem()",
            "localStorage.retrieve()",
            "localStorage.get()",
            "localStorage.loadItem()"
        ],
        correct: "localStorage.getItem()"
    },
    {
        question: "Which method removes a specific item from localStorage?",
        answers: [
            "localStorage.removeItem()",
            "localStorage.deleteItem()",
            "localStorage.clearItem()",
            "localStorage.clear()"
        ],
        correct: "localStorage.removeItem()"
    },
    {
        question: "Which of the following is true about localStorage?",
        answers: [
            "It can only store string values",
            "It can store any JavaScript object directly",
            "It expires after 30 days",
            "It requires an internet connection"
        ],
        correct: "It can only store string values"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Check if a previous score exists in localStorage
if (localStorage.getItem('quizScore')) {
    score = parseInt(localStorage.getItem('quizScore'));
}

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
        localStorage.setItem('quizScore', score); // Store the score in localStorage
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
        localStorage.setItem('quizScore', score); // Update the score in localStorage
        nextBtn.style.display = 'none'; // Hide button after submission
    }
});

// Load the first question when the page loads
window.onload = loadQuestion;
