const quizData = [
    {
        question: "What method is used to fetch data from GitHub issues?",
        answers: [
            "GET",
            "POST",
            "FETCH",
            "RETRIEVE"
        ],
        correct: "GET"
    },
    {
        question: "Which URL format is correct for fetching issues from a specific GitHub repository?",
        answers: [
            "https://api.github.com/repos/{owner}/{repo}/issues",
            "https://github.com/{owner}/{repo}/issues",
            "https://api.github.com/issues/{owner}/{repo}",
            "https://api.github.com/repos/issues/{owner}/{repo}"
        ],
        correct: "https://api.github.com/repos/{owner}/{repo}/issues"
    },
    {
        question: "How do you handle the response from a fetch call?",
        answers: [
            "response.data",
            "response.json()",
            "response.get()",
            "response.parse()"
        ],
        correct: "response.json()"
    },
    {
        question: "What do you use to catch errors in a fetch request?",
        answers: [
            "try-catch",
            "Promise.reject",
            "errorHandling",
            "catch()"
        ],
        correct: "catch()"
    },
    {
        question: "What does a successful fetch request return?",
        answers: [
            "404 status",
            "A promise",
            "An array",
            "An object"
        ],
        correct: "A promise"
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
