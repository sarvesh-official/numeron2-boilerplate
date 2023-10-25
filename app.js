// Iteration 1: Making the play button in the index.html functional.
playButton = document.getElementById("play-button");
// Description: When the play button is clicked the game.html page should be opened

playButton.onclick = () => {
  window.location.href = "game.html";
};
