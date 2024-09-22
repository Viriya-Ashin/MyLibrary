const quizData = [
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        answers: [
            "The global object",
            "The function that is currently executing",
            "The object that owns the method",
            "All of the above"
        ],
        correct: "All of the above"
    },
    {
        question: "In a regular function, what does 'this' refer to?",
        answers: [
            "The global object",
            "undefined",
            "The object that called the function",
            "The function itself"
        ],
        correct: "The global object"
    },
    {
        question: "What does 'this' refer to in an arrow function?",
        answers: [
            "The global object",
            "undefined",
            "The value of 'this' from the enclosing lexical context",
            "The object that owns the arrow function"
        ],
        correct: "The value of 'this' from the enclosing lexical context"
    },
    {
        question: "How can you explicitly set 'this' in JavaScript?",
        answers: [
            "Using the bind() method",
            "Using the call() method",
            "Using the apply() method",
            "All of the above"
        ],
        correct: "All of the above"
    },
    {
        question: "In a method, what does 'this' refer to?",
        answers: [
            "The object the method is called on",
            "The parent object",
            "The global object",
            "None of the above"
        ],
        correct: "The object the method is called on"
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
