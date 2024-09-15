const quizData = [
    {
      question: "What does HTML stand for?",
      answers: {
        a: "Hyper Text Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Home Tool Markup Language"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the correct syntax for linking a JavaScript file?",
      answers: {
        a: '<script href="script.js">',
        b: '<script src="script.js">',
        c: '<script link="script.js">'
      },
      correctAnswer: "b"
    },
    {
      question: "Which CSS property is used to change the text color?",
      answers: {
        a: "color",
        b: "text-color",
        c: "font-color"
      },
      correctAnswer: "a"
    }
  ];
  
  function buildQuiz() {
    const quizContainer = document.getElementById("quiz");
    const output = [];
  
    quizData.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (let letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
             ${letter} : ${currentQuestion.answers[letter]}
           </label>`
        );
      }
  
      output.push(
        `<div class="question">${currentQuestion.question}</div>
         <div class="answers">${answers.join('')}</div>`
      );
    });
  
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults() {
    const quizContainer = document.getElementById("quiz");
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
  
    quizData.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = 'green';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
  }
  
  document.getElementById("submit").addEventListener("click", showResults);
  
  buildQuiz();
  