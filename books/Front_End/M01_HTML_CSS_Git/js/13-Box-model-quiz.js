const quizData = [
    {
        question: "What is the width of the section in the given CSS?",
        options: ["400px", "500px", "600px", "700px"],
        correct: 2
    },
    {
        question: "What color is the border of the section?",
        options: ["Red", "Blue", "Black", "Green"],
        correct: 2
    },
    {
        question: "What is the background color of the images?",
        options: ["lightgreen", "lightblue", "lightgray", "burlywood"],
        correct: 1
    },
    {
        question: "What is the height of the images?",
        options: ["100px", "200px", "300px", "400px"],
        correct: 1
    },
    {
        question: "What type of alignment is applied to the text in the section?",
        options: ["left-align", "center-align", "right-align", "justify"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextButton');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectAnswer(index, button));
        optionsElement.appendChild(button);
    });

    nextButton.classList.remove('show');
}

function selectAnswer(selectedIndex, selectedButton) {
    const correctIndex = quizData[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
        optionsElement.children[correctIndex].classList.add('correct');
    }
    Array.from(optionsElement.children).forEach(button => button.disabled = true);
    nextButton.classList.add('show');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        questionElement.innerText = "You've completed the quiz!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";
    }
});

loadQuestion();
