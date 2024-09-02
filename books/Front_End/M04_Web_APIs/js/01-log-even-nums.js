/*
  Function to Log Even Numbers

  - Takes a number as input.
  - Iterates through numbers from 0 to the input number.
  - Logs even numbers to the console.
*/
var logEvenNums = function(num) {
    // Iterate through numbers from 0 to num
    for (let i = 0; i <= num; i++) {
        // Check if the number is even
        if (i % 2 === 0) {
        // Log even number to the console
        console.log(i);
    }
}

};
// Example usage: Log even numbers up to 6
logEvenNums(6);

