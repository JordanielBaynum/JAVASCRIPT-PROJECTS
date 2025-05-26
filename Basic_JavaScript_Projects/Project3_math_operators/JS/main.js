//!This creates results for result paragraph//
document.addEventListener("DOMContentLoaded", () => {
    const addition = document.getElementById("addition");
    const subtraction = document.getElementById("subtraction");
    const multiplication = document.getElementById("multiplication");
    const modulus = document.getElementById("modulus");
    const increment = document.getElementById("increment");
    const decrement = document.getElementById("decrement");
    const random = document.getElementById("random");
    const resultParagraph = document.getElementById("result");

    //!Adds event listeners to each button//

    //!EVENTLISTER FOR ADDITION//
    addition.addEventListener("click", () => {
        const result = addNumbers(4, 4);
        resultParagraph.textContent = `4 + 4 = ${result}`;
    });

    //!EVENTLISTER FOR SUBTRACTION//
       subtraction.addEventListener("click", () => {
        const result = subtractNumbers(4, 4);
        resultParagraph.textContent = `4 - 4 = ${result}`;
     });

     //!EVENTLISTER FOR MULTIPLICATION//
            multiplication.addEventListener("click", () => {
        const result = multiplyNumbers(4, 4);
        resultParagraph.textContent = `4 x 4 = ${result}`;
     });

     //!EVENTLISTER FOR MODULUS//
            modulus.addEventListener("click", () => {
        const result = modulusNumbers(4, 4);
        resultParagraph.textContent = `4 % 4 = ${result}`;
     });

     //!EVENTLISTER FOR INCREMENT//
            increment.addEventListener("click", () => {
        const result = incrementNumbers(4);
        resultParagraph.textContent = `4 ++ = ${result}`;
      });

      //!EVENTLISTER FOR DECREMENT//
            decrement.addEventListener("click", () => {
        const result = decrementNumbers(4);
        resultParagraph.textContent = `4 --  = ${result}`;
      });

      //!EVENTLISTER FOR RANDOM//
       
      random.addEventListener("click", () => {
        const result = generateRandomNumber();
        resultParagraph.textContent = `Random number (0-100): ${result}`;
      });
});

//!Functions to perform operators//


//!ADDITION FUNCTION//
function addNumbers(a, b) {
    return a + b;
}

//!SUBTRACTION FUNCTION//
function subtractNumbers(a, b) {
    return a - b;
}

//!MULTIPLICATION FUNCTION//
function multiplyNumbers(a, b){
    return a * b;
}

//!MODULUS FUNCTION//
function modulusNumbers(a, b) {
    return a % b;
}

//!INCREMENT FUNCTION//
function incrementNumbers(a) {
    return ++a;
}


//!DECREMENT FUNCTION//
function decrementNumbers(a) {
    return --a;
}

//!RANDOM FUNCTION//
function generateRandomNumber(){   //!Gereantes a random number//
    return Math.floor(Math.random() * 101);
}