const quizData = [
    {
        question: "What does destructuring in JavaScript allow you to do?",
        answers: [
            "Extract values from arrays or properties from objects",
            "Create new variables from existing ones",
            "Combine multiple objects into one",
            "None of the above"
        ],
        correct: "Extract values from arrays or properties from objects"
    },
    {
        question: "How do you destructure an object in a function parameter?",
        answers: [
            "function({prop1, prop2})",
            "function(prop1, prop2){}",
            "function([prop1, prop2])",
            "function{prop1, prop2}"
        ],
        correct: "function({prop1, prop2})"
    },
    {
        question: "Which of the following is a correct way to destructure an array?",
        answers: [
            "const [a, b] = array;",
            "const a, b = array;",
            "const (a, b) = array;",
            "const a = array[0], b = array[1];"
        ],
        correct: "const [a, b] = array;"
    },
    {
        question: "What happens if you try to destructure properties that do not exist?",
        answers: [
            "You get an error",
            "You get undefined values",
            "You get null values",
            "It throws a TypeError"
        ],
        correct: "You get undefined values"
    },
    {
        question: "Can you provide default values when destructuring?",
        answers: [
            "Yes, using the syntax: {prop1 = defaultValue}",
            "No, defaults are not allowed",
            "Only for arrays, not for objects",
            "Only for objects, not for arrays"
        ],
        correct: "Yes, using the syntax: {prop1 = defaultValue}"
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
