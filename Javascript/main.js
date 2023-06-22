const mainBody = document.getElementById("main-body");
const games = document.querySelectorAll(".col");
const gameNames = document.querySelectorAll(".gameName");
const searchInput = document.querySelector(".form-control");
const submit = document.getElementById("form-search");
const errorMessage = document.querySelector(".msg");

// CONVERT GAME INTO AN ARRAY
const turnGameIntoArray = Array.from(gameNames);

// LOOP THROUGH BAT FOR INNER TEXT
const gameTittle = turnGameIntoArray.map((ba) => ba.innerText);

submit.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  const searchBox = searchInput.value.toLowerCase();

  // LOOP THROUGH THE GAME NAMES
  for (i = 0; i < gameTittle.length; i++) {
    const matchGameNames = games[i].getElementsByTagName("h5")[0];

    // MATCH WHAT IS TYPED IN THE SEARCH BOX WITH THE GAME NAMES
    if (matchGameNames) {
      const textValue = matchGameNames.textContent || matchGameNames.innerHTML;

      // MATCH WHAT IS TYPED IN THE SEARCH BOX WITH THE GAME NAMES
      if (textValue.toLowerCase().indexOf(searchBox) > -1) {
        games[i].style.display = "";

      } 
      else {
        games[i].style.display = "none";
      }
    }
  }
  // clear field
  searchInput.value = "";
}
