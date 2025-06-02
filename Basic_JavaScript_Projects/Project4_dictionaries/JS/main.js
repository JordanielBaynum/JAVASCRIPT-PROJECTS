
//!This creates a dictionary about the car*//

const car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "color": "Blue",
    "features": ["Air Conditioning", "Navigation System", "Bluetooth"]
}


//!This is the function Dictionary that displays a value from the car dictionary*//

function Cars_make() {
    document.getElementById("Dictionary").innerHTML = "Car Make: " + car.make + " (" + car.year + ")";
}

//!This is the function Dictionary that displays a value from the car dictionary*//
function Cars_model() {
    document.getElementById("Dictionary").innerHTML = "Car Model: " + car.model;
}
//!This is the function Dictionary that displays a value from the car dictionary*//
function Cars_color() {
    document.getElementById("Dictionary").innerHTML = "Car Color: " + car.color;
//!This is the function Dictionary that displays a value from the car dictionary*//
}
function Cars_features() {
    document.getElementById("Dictionary").innerHTML = "Car Features: " + car.features.join(", ");
}

 //!This uses the delete operator to remove a property from the car dictionary*//
delete car.color;
