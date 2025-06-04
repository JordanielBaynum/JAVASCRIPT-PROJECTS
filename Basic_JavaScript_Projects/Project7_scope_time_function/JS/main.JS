//! This is a Global variable*//
let superhero = "Spider-Man";

function showPowers() { //! this is a local variable*//
  let power = "web-slinging";
  const p = document.getElementById('powers'); //! Get the paragraph element with id 'superhero'*//

  console.log("Superhero " + superhero); //! should log: // Superhero*//
  console.log("Power: " + power); //! should log: // Power*//
    p.textContent = superhero + " has the power of " + power + "."; //! Update the text content of the paragraph element*//
}

//! Intentionally broken function with a typo for debugging*//
function errorFunction() {
  let speed = 100; //! This is a local variable*//
  consol.log("Speed is: " + speed); //! Typo in console.log*//
}

//! This function checks the current time and updates the text content of a paragraph element*//
function checkTime() {
  const hour = new Date().getHours(); //! Get the current hour*//
  const p = document.getElementById('superheros');
//! Check if the paragraph element exists*//
  if (hour >= 6 && hour < 18) { //! Daytime is between 6 AM and 6 PM*//
    p.textContent = "It's daytime — superheroes are active!"; //! Update the text content of the paragraph element*//
  } else {
    p.textContent = "It's nighttime — superheroes are resting."; //! Update the text content of the paragraph element*//
  }
}