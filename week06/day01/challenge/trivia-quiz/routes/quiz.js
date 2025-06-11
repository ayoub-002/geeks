const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

let currentQuestionIndex = 0;
let score = 0;

// GET /quiz - Start quiz or show current question
router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.send("Quiz completed! Visit /quiz/score to see your score.");
  }
  res.send(triviaQuestions[currentQuestionIndex].question);
});

// POST /quiz - Submit an answer
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const currentQuestion = triviaQuestions[currentQuestionIndex];

  if (!userAnswer) {
    return res.status(400).send("Please provide an answer.");
  }

  let feedback = '';
  if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
    score++;
    feedback = 'Correct!';
  } else {
    feedback = `Incorrect! The correct answer was "${currentQuestion.answer}".`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.send(`${feedback}\nNext Question: ${triviaQuestions[currentQuestionIndex].question}`);
  } else {
    res.send(`${feedback}\nQuiz completed! Visit /quiz/score to see your score.`);
  }
});

// GET /quiz/score - Final score
router.get('/score', (req, res) => {
  res.send(`Your final score: ${score} out of ${triviaQuestions.length}`);
});

module.exports = router;
