const quizData = [
    {
        question: "What is the correct way to add a click event listener in JavaScript?",
        answers: [
            "element.addEventListener('click', function)",
            "element.onClick()",
            "element.on('click', function)",
            "element.clickEvent()"
        ],
        correct: "element.addEventListener('click', function)"
    },
    {
        question: "Which event object property returns the target of a click event?",
        answers: [
            "event.target",
            "event.currentTarget",
            "event.srcElement",
            "event.clickedElement"
        ],
        correct: "event.target"
    },
    {
        question: "How do you prevent the default action for a click event?",
        answers: [
            "event.preventDefault()",
            "event.stopDefault()",
            "event.stopPropagation()",
            "event.prevent()"
        ],
        correct: "event.preventDefault()"
    },
    {
        question: "Which method stops the propagation of a click event?",
        answers: [
            "event.stopPropagation()",
            "event.preventDefault()",
            "event.stopBubble()",
            "event.cancel()"
        ],
        correct: "event.stopPropagation()"
    },
    {
        question: "How can you trigger a click event programmatically in JavaScript?",
        answers: [
            "element.click()",
            "element.triggerClick()",
            "element.performClick()",
            "element.activateClick()"
        ],
        correct: "element.click()"
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
