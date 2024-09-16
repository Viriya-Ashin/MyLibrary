const questions = [
  {
    question: 'What is the purpose of the img CSS rule?',
    answers: ['To set width', 'To set height', 'To hide image', 'To add border'],
    correct: 'To set height'
  },
  {
    question: 'What does the <meta charset="UTF-8"> tag do?',
    answers: ['Specifies color', 'Specifies image size', 'Specifies character encoding', 'Specifies script type'],
    correct: 'Specifies character encoding'
  },
  {
    question: 'What is the purpose of the <header> section?',
    answers: ['To display image', 'To create links', 'To introduce the webpage content', 'To add meta tags'],
    correct: 'To introduce the webpage content'
  },
  {
    question: 'What HTML element is used to display contact info?',
    answers: ['<p>', '<ul>', '<div>', '<table>'],
    correct: '<ul>'
  },
  {
    question: 'What is the purpose of the alt attribute in <img>?',
    answers: ['To add a caption', 'To describe the image', 'To set size', 'To style the image'],
    correct: 'To describe the image'
  }
];

let currentQuestionIndex = 0;
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

document.addEventListener('DOMContentLoaded', () => {
  showQuestion(questions[currentQuestionIndex]);

  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      showEndMessage();
    }
  });
});

function showQuestion(question) {
  answerButtons.innerHTML = '';
  questionText.textContent = question.question;
  
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.classList.add('btn');
    answerButtons.appendChild(button);

    button.addEventListener('click', () => {
      if (answer === question.correct) {
        button.style.backgroundColor = 'green';
      } else {
        button.style.backgroundColor = 'red';
      }
      nextButton.style.display = 'block';
    });
  });

  nextButton.style.display = 'none';
}

function showEndMessage() {
  questionText.textContent = 'Quiz Completed!';
  answerButtons.innerHTML = '';
  nextButton.style.display = 'none';
}
