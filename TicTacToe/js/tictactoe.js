//!This variable keeps track of whose turn it is//
let activePlayer = 'X';
//!This array stores an array of moves.//
let selectedSquares = [];

//!This function is for placing an X or O in a square//
function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber); //!This gets the square element by its ID//
        if (activePlayer === 'X') { //!This checks if the active player is X//
            select.style.backgroundImage = 'url("images/x.jpeg")';
        } else { //!This checks if the active player is O//
            select.style.backgroundImage = 'url("images/o.jpeg")';
        }

        selectedSquares.push(squareNumber + activePlayer); //!This adds the square number and active player to the selectedSquares array//
        checkWinConditions(); //!This checks for a win or draw//

        if (activePlayer === 'X') { //!This checks if the active player is X//
            activePlayer = 'O'; //!If so, it changes the active player to O//
        } else {
            activePlayer = 'X';
        }

        audio('./media/place.mp3'); //!This plays a sound when a square is clicked//

        if (activePlayer === 'O') {
            disableClick(); //!This disables clicking on squares after a win or draw//
            setTimeout(function () { computersTurn(); }, 1000); //!This sets a timeout for the computer's turn//
        }

        return true; //!This returns true if the square was successfully clicked//       
    }

    //!This function results in a random square being selected by the computer//
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9)); //!Random number between 0 and 8//
            if (placeXOrO(pickASquare)) {
                success = true;
            }
        }
    }
}

//!This function parses the selectedSquares array to search for win conditions.//
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawLine(50, 100, 558, 100); }
    else if (arrayIncludes('3X', '4X', '5X')) { drawLine(50, 304, 558, 304); }
    else if (arrayIncludes('6X', '7X', '8X')) { drawLine(50, 508, 558, 508); }
    else if (arrayIncludes('0X', '3X', '6X')) { drawLine(100, 50, 100, 558); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawLine(304, 50, 304, 558); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawLine(508, 50, 508, 558); }
    else if (arrayIncludes('6X', '4X', '2X')) { drawLine(100, 508, 510, 90); }
    else if (arrayIncludes('0X', '4X', '8X')) { drawLine(100, 100, 520, 520); }
    else if (arrayIncludes('0O', '1O', '2O')) { drawLine(50, 100, 558, 100); }
    else if (arrayIncludes('3O', '4O', '5O')) { drawLine(50, 304, 558, 304); }
    else if (arrayIncludes('6O', '7O', '8O')) { drawLine(50, 508, 558, 508); }
    else if (arrayIncludes('0O', '3O', '6O')) { drawLine(100, 50, 100, 558); }
    else if (arrayIncludes('1O', '4O', '7O')) { drawLine(304, 50, 304, 558); }
    else if (arrayIncludes('2O', '5O', '8O')) { drawLine(508, 50, 508, 558); }
    else if (arrayIncludes('6O', '4O', '2O')) { drawLine(100, 508, 510, 90); }
    else if (arrayIncludes('0O', '4O', '8O')) { drawLine(100, 100, 520, 520); }
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3'); //!This plays a sound when there is a draw//
        setTimeout(function () { resetGame(); }, 500); //!This resets the game after a draw//
    }
}

//! This function checks if the selectedSquares array includes the specified elements//
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b === true && c === true) {
        return true;
    }
    return false;
}

//!This function makes our body element temporarily unclickable//
function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(function () {
        document.body.style.pointerEvents = 'auto';
    }, 1000);
}

//!This function takes a string parameter and plays an audio file//
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//!This function utilizes HTML canvas to draw a line across the screen//
function drawLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() { //!This function animates the line drawing//
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        c.stroke();

        if (x1 <= x2 && y1 <= y2) { //!This checks if the line is being drawn in the forward direction//
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 >= x2 && y1 >= y2) { //!This checks if the line is being drawn in reverse//
            if (x > x2) { x -= 10; }
            if (y > y2) { y -= 10; }
            if (x <= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
//!This function clears the canvas after a win//
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
 //!This function clears the canvas after a win//
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () {
        clear();
        resetGame();
    }, 1000);
}

//!This function resets the game in the event of a tie or a win//
function resetGame() {
    //!This for loop iterates through each HTML square element.
    for(let i =0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';  
    }
    //!This resets our arrary so it is empty and we can start over.
    selectedSquares = [];
}
