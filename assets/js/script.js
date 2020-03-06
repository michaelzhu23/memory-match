function displayStats(){
  document.getElementById("gamesPlayedId").textContent = gamesPlayed;
  document.getElementById("attemptsId").textContent = attempts;
  document.getElementById("accuracyId").textContent = calculateAccuracy(attempts, matches) + "%";
}

function calculateAccuracy(attempts, matches){
  if(!attempts){
    return 0;
  }
  return Math.trunc((matches / attempts) * 100);
}

function resetGame(){
  matches = 0;
  attempts = 0;
  gamesPlayed++;
  displayStats();
  resetCards();
  document.querySelector(".modal-overlay").classList.add("hidden");
}

function resetCards(){
  var hiddenCards = document.querySelectorAll("div.card-back");
  for(var i = 0; i < hiddenCards.length; i++){
    hiddenCards[i].classList.remove("hidden");
  }
}

document.getElementById("resetButton").addEventListener("click", resetGame);
