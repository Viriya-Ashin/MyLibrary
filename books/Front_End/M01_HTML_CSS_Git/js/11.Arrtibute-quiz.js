let currentQuestion = 1;
const totalQuestions = 5;

function showNextQuestion(questionNumber) {
  // Hide current question
  document.getElementById(`question-${currentQuestion}`).style.display = 'none';
  
  // Show next question
  document.getElementById(`question-${questionNumber}`).style.display = 'block';
  
  // Update current question
  currentQuestion = questionNumber;
}

function submitQuiz() {
  let score = 0;
  
  if (document.querySelector('input[name="q1"]:checked')?.value === "correct") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "correct") score++;
  if (document.querySelector('input[name="q3"]:checked')?.value === "correct") score++;
  if (document.querySelector('input[name="q4"]:checked')?.value === "correct") score++;
  if (document.querySelector('input[name="q5"]:checked')?.value === "correct") score++;

  // Hide quiz and show result
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").innerText = `You scored ${score} out of ${totalQuestions}`;
}
