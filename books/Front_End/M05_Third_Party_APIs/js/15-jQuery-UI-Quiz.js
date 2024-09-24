const quizData = [
    {
        question: "What is the primary purpose of jQuery UI?",
        answers: [
            "To manipulate the DOM",
            "To create user interface elements",
            "To make AJAX calls",
            "To enhance CSS styles"
        ],
        correct: "To create user interface elements"
    },
    {
        question: "Which widget is used to create draggable elements?",
        answers: [
            "Accordion",
            "Dialog",
            "Draggable",
            "Droppable"
        ],
        correct: "Draggable"
    },
    {
        question: "What method is used to create a dialog in jQuery UI?",
        answers: [
            "dialog()",
            "openDialog()",
            "createDialog()",
            "showDialog()"
        ],
        correct: "dialog()"
    },
    {
        question: "Which jQuery UI widget allows you to create a date picker?",
        answers: [
            "Datepicker",
            "Calendar",
            "Picker",
            "Datetime"
        ],
        correct: "Datepicker"
    },
    {
        question: "How can you make an element sortable in jQuery UI?",
        answers: [
            "sortable()",
            "drag()",
            "drop()",
            "sort()"
        ],
        correct: "sortable()"
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
