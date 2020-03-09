var cards = [
  "zion",
  "doncic",
  "lebron",
  "kawhi",
  "harden",
  "morant",
  "giannis",
  "donovan",
  "lillard",
  "zion",
  "doncic",
  "lebron",
  "kawhi",
  "harden",
  "morant",
  "giannis",
  "donovan",
  "lillard"
];

function startGame(array){
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  for (var shuffleIndex = 0; shuffleIndex < array.length; shuffleIndex++) {
    var randomPosition = Math.floor(Math.random() * array.length)
    var placeHolder = array[shuffleIndex];
    array[shuffleIndex] = array[randomPosition];
    array[randomPosition] = placeHolder;
  }
  for (var createIndex = 0; createIndex < array.length; createIndex++){
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("col-2", "card");
    var cardFrontDiv = document.createElement("div");
    cardFrontDiv.classList.add("card-front", array[createIndex]);
    var cardBackDiv = document.createElement("div");
    cardBackDiv.className = "card-back";
    cardDiv.append(cardFrontDiv, cardBackDiv);
    main.appendChild(cardDiv);
  }
}

startGame(cards);


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
