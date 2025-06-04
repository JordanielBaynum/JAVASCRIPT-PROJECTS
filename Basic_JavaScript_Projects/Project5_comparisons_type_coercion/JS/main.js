
document.write(typeof "word"); //! Outputs: string*//

document.write(typeof 3.14); //! Outputs: number*//

//!The following code displays infinity and negative infinity in an HTML document*//
document.getElementById("positiveInfinity").textContent = 2E310;
document.getElementById("negativeInfinity").textContent = -3E310;

//!The following code displays combining a sting with a number*//
let greeting = "The number is " + 10 + "for the day.";
document.write(greeting); //! Outputs: The number is 10 for the day.*// 

//!The following are the variable declarations*//
  let x = 10;
  let y = "10";
  let z = 5;
  let isTrue = false;

  //! The following displays ==, ===, >, <, &&, ||, and ! operators*//

  document.write("x == y: " + (x == y) + "<br>");      //! true - value is equal*//

  document.write("x === y: " + (x === y) + "<br>");    //! false - type is different*//

  document.write("x > z: " + (x > z) + "<br>");        //! true*//

  document.write("z < x: " + (z < x) + "<br>");        //! true*//

  document.write("(x > z && z < x): " + (x > z && z < x) + "<br>"); //! true*//

  document.write("(x < z || y == 10): " + (x < z || y == 10) + "<br>"); //! true*//

  document.write("!isTrue: " + (!isTrue) + "<br>");    //! true*//





