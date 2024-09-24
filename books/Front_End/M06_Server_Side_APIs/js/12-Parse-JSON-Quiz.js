const quizData = [
    {
        question: "What method is used to parse a JSON string into a JavaScript object?",
        answers: [
            "JSON.parse()",
            "JSON.stringify()",
            "parseJSON()",
            "stringifyJSON()"
        ],
        correct: "JSON.parse()"
    },
    {
        question: "What will be the output of JSON.parse('{\"name\":\"John\"}')?",
        answers: [
            "{ name: 'John' }",
            "{ \"name\": \"John\" }",
            "SyntaxError",
            "undefined"
        ],
        correct: "{ name: 'John' }"
    },
    {
        question: "Which of the following is a valid JSON string?",
        answers: [
            "'name': 'John'",
            "{\"name\": \"John\"}",
            "{name: 'John'}",
            "name: 'John'"
        ],
        correct: "{\"name\": \"John\"}"
    },
    {
        question: "What does JSON.stringify() do?",
        answers: [
            "Converts a JavaScript object to a JSON string",
            "Parses a JSON string to a JavaScript object",
            "Validates a JSON string",
            "None of the above"
        ],
        correct: "Converts a JavaScript object to a JSON string"
    },
    {
        question: "If JSON parsing fails, which error is thrown?",
        answers: [
            "TypeError",
            "SyntaxError",
            "ReferenceError",
            "Error"
        ],
        correct: "SyntaxError"
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
