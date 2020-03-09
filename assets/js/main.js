var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatches = 9;
var matches = 0;
var attempts = 0;
var gamesPlayed = 0;
var main = document.getElementById("gameCards");
var time;
var timerText = document.getElementById("timer");
var buzzerSound = document.getElementById("buzzer");
var swishSound = document.getElementById("swish");
var backboardSound = document.getElementById("backboard");
var cheeringSound = document.getElementById("cheering");


main.addEventListener("click", handleClick);
function handleClick(event){
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  if(!time){
    time = 60;
    var interval = setInterval(function () {
      time--;
      if (time) {
        timerText.textContent = "0:" + time;
        if (time < 10) {
          timerText.textContent = "0:0" + time;
        }
      } else {
        timerText.textContent = "0:00";
        buzzerSound.play();
        clearInterval(interval);
      }
    }, 1000)
  }
  event.target.className += " hidden";
  if(!firstCardClicked){
    firstCardClicked = event.target;
    firstCardClasses = firstCardClicked.previousElementSibling.className;
  } else {
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.previousElementSibling.className;
    main.removeEventListener("click", handleClick);
      if(firstCardClasses === secondCardClasses){
        swishSound.play();
        main.addEventListener("click", handleClick);
        firstCardClicked = null;
        secondCardClicked = null;
        matches++;
        attempts++;
        displayStats();
        if(matches === maxMatches){
          cheeringSound.play();
          document.querySelector(".modal-overlay").classList.remove("hidden");
        }
      } else {
        backboardSound.play();
        setTimeout(function(){
          firstCardClicked.classList.remove("hidden");
          secondCardClicked.classList.remove("hidden");
          main.addEventListener("click", handleClick);
          firstCardClicked = null;
          secondCardClicked = null;
          attempts++;
          displayStats();
        }, 1500);
      }
  }
}
