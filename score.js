// Iteration 8: Making scoreboard functional

playAgain = document.getElementById("play-again-button");

playAgain.onclick = () => {
  window.location.href = "game.html";
};

let params = new URLSearchParams(window.location.search);

let score = params.get("score");

let scoreboard = document.getElementById("score-board");

scoreboard.textContent = score;
