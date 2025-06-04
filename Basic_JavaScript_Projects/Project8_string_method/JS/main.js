function combineStrings() { //! This function will combine two strings to form a superhero name*//
  let part1 = "Spider-"; 
  let part2 = "Man";
  let fullName = part1.concat(part2);

  console.log("Full superhero name:", fullName); 
  document.getElementById("combine").innerHTML = "Full superhero name: " + fullName; //! This will display the combined string in the HTML element with id "combine"*//
}

//! This function will display the current date and time in a specific format*//
function slice_Method(){
    var sentence= "Hello Spidey my name is Batman from Gothom and I am here to stay."; //! This is the string we will slice*//
    var section= sentence.slice(27, 33); //! This will slice the string from index 27 to index 33*//
    document.getElementById("slice").innerHTML= section; //! This will display the sliced string in the HTML element with id "slice"*//
}

//! This function will convert a number to a string and display its type*//

function convertNumberToString() { //! This function converts a number to a string and logs the result*//
  let number = 2025;//! This is the number we will convert to a string*//
  let stringVersion = number.toString(); //! This will convert the number to a string*//

  console.log("Original number:", number); //! This will log the original number*//
  console.log("Converted to string:", stringVersion); //! This will log the converted string*//
  console.log("Type of converted value:", typeof stringVersion); //! This will log the type of the converted value*//
  document.getElementById("convert").innerHTML = "Converted to string: " + stringVersion; //! This will display the converted string in the HTML element with id "convert"*//
}

function precision_Method() {
    var x = 123456789.123456789; //! This is the number we will use to demonstrate precision*//
    document.getElementById("precision").innerHTML = x.toPrecision(5); //! This will display the number with a precision of 5 digits in the HTML element with id "precision"*//
}