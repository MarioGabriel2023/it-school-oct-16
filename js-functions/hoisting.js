/**
 * HOISTING
 *
 * var vs let vs const
 */

function randomFunction() {
  if (true) {
    var randomVariable = "10";

    console.log(randomVariable);
  }

  console.log(randomVariable);
}

randomFunction();

console.log(randomVariable);
