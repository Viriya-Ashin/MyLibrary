const quizData = [
    {
        question: "What does 'media queries' allow you to do?",
        answers: [
            "Make your CSS responsive to different screen sizes",
            "Change HTML based on screen size",
            "Optimize JavaScript for performance",
            "Embed audio and video"
        ],
        correct: "Make your CSS responsive to different screen sizes"
    },
    {
        question: "What is the typical breakpoint for a mobile device in CSS?",
        answers: ["1024px", "768px", "480px", "1200px"],
        correct: "480px"
    },
    {
        question: "Which unit is most suitable for creating responsive layouts?",
        answers: ["px", "em", "cm", "%"],
        correct: "%"
    },
    {
        question: "What is the purpose of 'viewport' meta tag in HTML?",
        answers: [
            "Ensures website scales correctly on mobile devices",
            "Defines the layout of the website",
            "Loads CSS faster",
            "Adds SEO capabilities"
        ],
        correct: "Ensures website scales correctly on mobile devices"
    },
    {
        question: "Which CSS framework is known for its responsive grid system?",
        answers: ["Bootstrap", "jQuery", "WordPress", "Node.js"],
        correct: "Bootstrap"
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
