 //! Function that runs when the button is clicked//

function runWhileLoop() {
    let output = "";
    let i = 1;
    //! While loop continues as long as i is less than or equal to 5//
    while (i <= 5) {
        output += "While Loop Count: " + i + "<br>";
        i++;
    }
    document.getElementById("output").innerHTML = output;
}

//! Function that runs when the button is clicked for do-while loop//
function runForLoop() {
    let output = "";
    //! For loop that iterates from 1 to 5//
    for (let i = 2; i <= 10; i += 2) {
        output += "For Loop Even Number: " + i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

//! Function that utilizes an array of fruits and displays them//
function showArray() {
    //! Creating an array of fruits using let//
    const fruits = ["Apple", "Banana", "Grape", "Date"];
    let output = "Fruits Array:<br>";
    //! Looping through the array using for loop//
    for (let i = 0; i < fruits.length; i++) {
        output += "- " + fruits[i] + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

//! Function that creates an object and displays its properties//
function showObject() {
    //! Creates an object using let//
    let person = {
        firstName: "Jack",
        lastName: "Sparrow",
        age: 35,
        job: "Pirate"
    };
    //! Display object properties//
    let output = "Person Object:<br>";
    output += "Name: " + person.firstName + " " + person.lastName + "<br>";
    output += "Age: " + person.age + "<br>";
    output += "Job: " + person.job + "<br>";
    document.getElementById("output").innerHTML = output;
}