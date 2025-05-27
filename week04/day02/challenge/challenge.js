const gameInfo = [
  { username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
  { username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
  { username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
  { username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
];

const usernames = gameInfo.map(player => player.username + "!");
console.log(usernames);

const winners = gameInfo
  .filter(player => player.score > 5)
  .map(player => player.username);
console.log(winners);

const totalScore = gameInfo.reduce((sum, player) => sum + player.score, 0);
console.log(totalScore);
