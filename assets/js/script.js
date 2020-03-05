function displayStats(){
  document.getElementById("gamesPlayed").textContent = gamesPlayed;
  document.getElementById("attempts").textContent = attempts;
  document.getElementById("accuracy").textContent = calculateAccuracy(attempts, matches) + "%";
}

function calculateAccuracy(attempts, matches){
  return Math.trunc((matches / attempts) * 100);
}
