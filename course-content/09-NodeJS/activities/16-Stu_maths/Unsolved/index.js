// TODO: Import `maths.js`
// var maths = require("./maths.js")

const { sum, difference, product } = require("./maths");

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
console.log(process.argv);
var operation = process.argv[2];
var numOne = process.argv[3];
var numTwo = process.arg[4];
// TODO: Create a `switch` statement that accepts an `operation` parameter
switch (operation) {
    case "sum":
        sum(numOne, numTwo);
        break;
    case "difference":
        difference(numOne, numTwo);
        break;
    case "product":
        product(numberOne, numTwo);
        break;
    case "quotient":
        product(numOne, numTwo);
}

// THIS IS JUST EXPLAINING WHAT THE PREVIOUS THING DID

// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
