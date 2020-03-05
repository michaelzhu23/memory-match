var firstCardClicked;
var secondCardClicked;
var firstCardClasses;
var secondCardClasses;
var maxMatches = 9;
var matches = 0;
var attempts = 0;
var gamesPlayed = 0;
var main = document.getElementById("gameCards");

main.addEventListener("click", handleClick);
function handleClick(event){
  if (event.target.className.indexOf("card-back") === -1) {
    return;
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
        main.addEventListener("click", handleClick);
        firstCardClicked = null;
        secondCardClicked = null;
        matches++;
        attempts++;
        displayStats();
        if(matches === maxMatches){
          document.querySelector(".modal-overlay").classList.remove("hidden");
        }
      } else {
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
