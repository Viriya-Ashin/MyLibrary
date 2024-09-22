const quizData = [
    {
        question: "What does the `:hover` pseudo-class do?",
        answers: [
            "Styles an element when it's clicked",
            "Styles an element when it's hovered over by a pointer",
            "Styles the first child element",
            "Applies styles after an element is focused"
        ],
        correct: "Styles an element when it's hovered over by a pointer"
    },
    {
        question: "What does the `::before` pseudo-element do?",
        answers: [
            "Inserts content before an element's content",
            "Inserts content after an element's content",
            "Styles the last child element",
            "Applies styles to the parent element"
        ],
        correct: "Inserts content before an element's content"
    },
    {
        question: "Which pseudo-class is used to select the first child of an element?",
        answers: [
            ":first-child",
            ":nth-child(2)",
            ":only-child",
            ":last-child"
        ],
        correct: ":first-child"
    },
    {
        question: "What does the `:focus` pseudo-class do?",
        answers: [
            "Styles an element when it gets focus (like a clicked input)",
            "Styles an element when it's hovered",
            "Selects the parent element",
            "Applies styles to hidden elements"
        ],
        correct: "Styles an element when it gets focus (like a clicked input)"
    },
    {
        question: "Which pseudo-element can be used to add content after an element's content?",
        answers: [
            "::after",
            "::before",
            ":nth-child(1)",
            ":empty"
        ],
        correct: "::after"
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
