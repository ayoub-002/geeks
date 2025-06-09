const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());  // to parse JSON request bodies

// Emoji data
const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🇲🇦', name: 'Morocco Flag' },
  { emoji: '😢', name: 'Cry' },
  { emoji: '💰', name: 'Money' },
  { emoji: '👨', name: 'Male' },
  { emoji: '👩', name: 'Female' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '📚', name: 'Books' },
  { emoji: '🎉', name: 'Party' },
  { emoji: '⚽', name: 'Soccer' }
];


// In-memory score and leaderboard
let playerScore = 0;
const leaderboard = [];

// Utility: pick random element from array
function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate options (correct + 3 distractors)
function generateOptions(correctName) {
  const options = new Set([correctName]);
  while (options.size < 4) {
    const randomName = randomFromArray(emojis).name;
    options.add(randomName);
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
}

// GET /game - send random emoji and options
app.get('/game', (req, res) => {
  const randomEmoji = randomFromArray(emojis);
  const options = generateOptions(randomEmoji.name);
  res.json({ emoji: randomEmoji.emoji, options });
});

// POST /guess - check the player's guess
app.post('/guess', (req, res) => {
  const { emoji, guess, playerName } = req.body;
  const emojiObj = emojis.find(e => e.emoji === emoji);
  if (!emojiObj) {
    return res.status(400).json({ message: 'Invalid emoji' });
  }
  const correct = emojiObj.name === guess;
  if (correct) playerScore++;

  res.json({ correct, score: playerScore });
});

// POST /submit-score - submit player's score for leaderboard
app.post('/submit-score', (req, res) => {
  const { playerName } = req.body;
  if (!playerName) return res.status(400).json({ message: 'Player name required' });

  leaderboard.push({ playerName, score: playerScore });
  leaderboard.sort((a, b) => b.score - a.score);

  // Reset player score for new game
  playerScore = 0;
  res.json({ message: 'Score submitted', leaderboard });
});

// GET /leaderboard - show leaderboard
app.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

// Serve a simple frontend page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
