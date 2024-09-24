const quizData = [
    {
        question: "What method is used to attach an event listener to an element?",
        answers: [
            "addEventListener()",
            "onClick()",
            "setEvent()",
            "attachEventListener()"
        ],
        correct: "addEventListener()"
    },
    {
        question: "What is the correct syntax to remove an event listener?",
        answers: [
            "removeEventListener('click', function)",
            "deleteEventListener('click', function)",
            "removeEvent('click')",
            "none of the above"
        ],
        correct: "removeEventListener('click', function)"
    },
    {
        question: "How can you pass parameters to an event listener function?",
        answers: [
            "Directly in the addEventListener()",
            "Use an anonymous function or arrow function",
            "Parameters are not supported",
            "All of the above"
        ],
        correct: "Use an anonymous function or arrow function"
    },
    {
        question: "Which event is triggered when an element loses focus?",
        answers: [
            "blur",
            "focusout",
            "mouseout",
            "leave"
        ],
        correct: "blur"
    },
    {
        question: "Which of the following events occurs when the user presses a key?",
        answers: [
            "keydown",
            "keypress",
            "keyup",
            "All of the above"
        ],
        correct: "All of the above"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const nextBtn = document.getElementById('nextBtn');
const resultContainer = document.getElementById('result');

// Function to load a quiz question dynamically
function loadQuestion() {
    quizContainer.innerHTML = ''; // Clear previous question

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
        quizContainer.innerHTML = ''; // Clear the quiz container
        resultContainer.textContent = `You scored ${score} out of ${quizData.length}.`;
        nextBtn.style.display = 'none'; // Hide the next button after submission
    }
});

// Load the first question when the page loads
window.onload = loadQuestion;
