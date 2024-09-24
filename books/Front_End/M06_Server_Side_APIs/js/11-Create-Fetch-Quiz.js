const quizData = [
    {
        question: "What method is used to send a POST request with the Fetch API?",
        answers: [
            "fetchPost()",
            "fetch()",
            "post()",
            "send()"
        ],
        correct: "fetch()"
    },
    {
        question: "Which option is used to specify the method when using Fetch?",
        answers: [
            "method: 'GET'",
            "type: 'POST'",
            "requestMethod: 'POST'",
            "httpMethod: 'POST'"
        ],
        correct: "method: 'GET'"
    },
    {
        question: "How can you convert a response to JSON using Fetch?",
        answers: [
            "response.toJson()",
            "response.json()",
            "JSON.parse(response)",
            "response.convertToJSON()"
        ],
        correct: "response.json()"
    },
    {
        question: "What type of object does fetch() return?",
        answers: [
            "XMLHttpRequest",
            "Response",
            "Promise",
            "Event"
        ],
        correct: "Promise"
    },
    {
        question: "What is the default method used by fetch?",
        answers: [
            "POST",
            "PUT",
            "GET",
            "DELETE"
        ],
        correct: "GET"
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
