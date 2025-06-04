//!This code defines a function that checks if a person is tall enough to ride a roller coaster based on their height input*//
function Ride_Function() {
    var Heaight, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52)  ? "You are too short to ride." : "You are tall enough to ride!";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
 //!This is a nested function that checks if the person is tall enough to ride*//
 function sayHello() {
        return "Hello, welcome to the ride!";
    }
    document.getElementById("Greeting").innerHTML = sayHello();    
}


//!This code is for New and This Constuctor functions*//
function checkAge() {
  const age = 40;  //! Jack Sparrow's age*//
  const message = age >= 18 ? "Jack Sparrow is an adult." : "Jack Sparrow is a minor.";
  document.getElementById('ageCheck').textContent = message;
}
function Person(name, age) { //! Constructor function for creating a person object*//
  this.name = name; //! Assigning name to the person object*//
  this.age = age; //! Assigning age to the person object*//
}

function showJack() { //! Function to create a new person object for Jack Sparrow and display his information*//
  const jack = new Person("Jack Sparrow", 40); //! Creating a new person object with name and age*//
  document.getElementById('jackInfo').textContent = jack.name + " is " + jack.age + " years old.";
}