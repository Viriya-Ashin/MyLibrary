const quizData = [
    {
        question: "What is scope in JavaScript?",
        answers: [
            "The visibility of variables and functions in code",
            "The amount of memory allocated for variables",
            "The type of data a variable can hold",
            "The order in which code executes"
        ],
        correct: "The visibility of variables and functions in code"
    },
    {
        question: "Which type of scope is created by functions?",
        answers: [
            "Global Scope",
            "Local Scope",
            "Block Scope",
            "Function Scope"
        ],
        correct: "Function Scope"
    },
    {
        question: "What does the 'let' keyword provide in terms of scope?",
        answers: [
            "Global Scope",
            "Function Scope",
            "Block Scope",
            "Both Function and Global Scope"
        ],
        correct: "Block Scope"
    },
    {
        question: "Which keyword is used to create a variable that is scoped to the nearest block?",
        answers: [
            "var",
            "let",
            "const",
            "All of the above"
        ],
        correct: "let"
    },
    {
        question: "What happens if you try to access a variable declared with 'let' outside its block?",
        answers: [
            "The variable is accessible globally",
            "It throws a ReferenceError",
            "It returns undefined",
            "It works the same as var"
        ],
        correct: "It throws a ReferenceError"
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
