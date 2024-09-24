const quizData = [
    {
        question: "What method is used to dynamically create a new HTML element?",
        answers: [
            "createElement()",
            "appendChild()",
            "innerHTML()",
            "newElement()"
        ],
        correct: "createElement()"
    },
    {
        question: "Which of the following is a way to change the content of an HTML element dynamically?",
        answers: [
            "document.getElementById('id').textContent = 'New Content'",
            "document.getElementById('id').changeContent('New Content')",
            "setContent('id', 'New Content')",
            "innerHTML('id', 'New Content')"
        ],
        correct: "document.getElementById('id').textContent = 'New Content'"
    },
    {
        question: "What is the purpose of the appendChild() method?",
        answers: [
            "To remove a child element",
            "To create a new element",
            "To add a node to the end of a specified parent node",
            "To replace an existing node"
        ],
        correct: "To add a node to the end of a specified parent node"
    },
    {
        question: "How do you remove an element from the DOM?",
        answers: [
            "element.remove()",
            "removeChild(element)",
            "delete element",
            "detach(element)"
        ],
        correct: "element.remove()"
    },
    {
        question: "Which method is used to set or return the value of the style property for an element?",
        answers: [
            "style.set()",
            "setStyle()",
            "element.style.property",
            "style.property()"
        ],
        correct: "element.style.property"
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
