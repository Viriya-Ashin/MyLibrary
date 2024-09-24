const quizData = [
    {
        question: "What is event delegation in JavaScript?",
        answers: [
            "Attaching an event listener to a parent element to handle events for its children",
            "Directly attaching an event listener to each child element",
            "Using a separate function to handle events",
            "Creating an event handler for every child element"
        ],
        correct: "Attaching an event listener to a parent element to handle events for its children"
    },
    {
        question: "Which method helps in delegating events from a parent element?",
        answers: [
            "event.target",
            "event.preventDefault()",
            "event.delegate",
            "event.stopPropagation()"
        ],
        correct: "event.target"
    },
    {
        question: "Why is event delegation useful?",
        answers: [
            "It improves performance by reducing the number of event listeners",
            "It allows you to bind events only to child elements",
            "It prevents the default behavior of elements",
            "It is a way to stop event bubbling"
        ],
        correct: "It improves performance by reducing the number of event listeners"
    },
    {
        question: "When is event delegation particularly helpful?",
        answers: [
            "When elements are dynamically added to the DOM",
            "When all elements have the same event listener",
            "When elements are statically defined in the HTML",
            "When events need to stop bubbling"
        ],
        correct: "When elements are dynamically added to the DOM"
    },
    {
        question: "Which of the following is true about event delegation?",
        answers: [
            "The parent element listens for events triggered by its child elements",
            "It requires separate event handlers for each child element",
            "It only works with mouse events",
            "It is only useful for form elements"
        ],
        correct: "The parent element listens for events triggered by its child elements"
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
