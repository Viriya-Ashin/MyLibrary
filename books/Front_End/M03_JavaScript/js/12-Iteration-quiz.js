const quizData = [
    {
        question: "Which loop is best used when the number of iterations is known?",
        answers: [
            "for loop",
            "while loop",
            "do...while loop",
            "for...in loop"
        ],
        correct: "for loop"
    },
    {
        question: "What is the syntax of a 'while' loop in JavaScript?",
        answers: [
            "while (condition) { code }",
            "while { code } (condition)",
            "do (code) while (condition);",
            "loop while { code }"
        ],
        correct: "while (condition) { code }"
    },
    {
        question: "Which loop always executes the code block at least once?",
        answers: [
            "for loop",
            "while loop",
            "do...while loop",
            "for...of loop"
        ],
        correct: "do...while loop"
    },
    {
        question: "How do you stop a loop in JavaScript?",
        answers: [
            "stop()",
            "continue",
            "exit()",
            "break"
        ],
        correct: "break"
    },
    {
        question: "Which of the following loops iterates over the properties of an object?",
        answers: [
            "for loop",
            "for...of loop",
            "for...in loop",
            "while loop"
        ],
        correct: "for...in loop"
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
