// Initialize variable x with a value of 50
var x = 50;
// Define two boolean expressions based on the value of x
var expression1 = x < 25; // Checks if x is less than 25
var expression2 = x > 50; // Checks if x is greater than 50

// Evaluate the expressions and log corresponding messages to the console
if (expression1 && expression2) {
    // Both expression1 and expression2 are true
    console.log('True True');
} else if (expression1) {
    // Only expression1 is true
    console.log('True False');
} else if (expression2) {
    // Only expression2 is true
    console.log('False True');
} else {
    // Neither expression1 nor expression2 are true
    console.log('False False')
}

