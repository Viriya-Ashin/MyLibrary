const quizData = [
    {
        question: "What does createElement() do in JavaScript?",
        answers: [
            "It creates a new HTML element",
            "It appends a child element",
            "It modifies the DOM directly",
            "It removes an element"
        ],
        correct: "It creates a new HTML element"
    },
    {
        question: "Which method do you use to append a newly created element to the DOM?",
        answers: [
            "createElement()",
            "appendChild()",
            "querySelector()",
            "innerHTML()"
        ],
        correct: "appendChild()"
    },
    {
        question: "When appending an element, where does the new element go?",
        answers: [
            "It replaces the parent element",
            "It is appended as the first child",
            "It is appended as the last child",
            "It is inserted before all siblings"
        ],
        correct: "It is appended as the last child"
    },
    {
        question: "Can createElement() be used to create non-HTML elements, like text nodes?",
        answers: [
            "No, only HTML elements",
            "Yes, but it needs special syntax",
            "Yes, but only in certain browsers",
            "No, you must use createTextNode() for text"
        ],
        correct: "No, you must use createTextNode() for text"
    },
    {
        question: "How can you add multiple elements to the DOM in one call?",
        answers: [
            "By chaining appendChild()",
            "Using append() which allows multiple nodes",
            "Using multiple createElement()",
            "You can't append multiple nodes at once"
        ],
        correct: "Using append() which allows multiple nodes"
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
