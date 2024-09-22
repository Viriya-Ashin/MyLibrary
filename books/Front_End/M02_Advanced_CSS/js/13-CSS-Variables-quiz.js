const quizData = [
    {
        question: "What is the syntax to define a CSS variable?",
        answers: [
            "--variable-name: value;",
            "$variable-name: value;",
            "var(variable-name): value;",
            "@variable-name: value;"
        ],
        correct: "--variable-name: value;"
    },
    {
        question: "How do you access the value of a CSS variable in a stylesheet?",
        answers: [
            "var(--variable-name);",
            "use(--variable-name);",
            "$variable-name;",
            "@variable-name;"
        ],
        correct: "var(--variable-name);"
    },
    {
        question: "Where can CSS variables be defined?",
        answers: [
            "Only inside a :root selector",
            "Only inside a specific class",
            "Inside any CSS selector",
            "Only inside HTML tags"
        ],
        correct: "Inside any CSS selector"
    },
    {
        question: "What is the primary advantage of using CSS variables?",
        answers: [
            "They make your CSS longer",
            "They reduce the need for repeated values",
            "They allow for dynamic JavaScript updates",
            "They are supported only by old browsers"
        ],
        correct: "They reduce the need for repeated values"
    },
    {
        question: "Which of the following is a valid way to define a fallback value for a CSS variable?",
        answers: [
            "var(--color, black);",
            "fallback(--color: black);",
            "var(--color) or black;",
            "set(--color: black);"
        ],
        correct: "var(--color, black);"
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
