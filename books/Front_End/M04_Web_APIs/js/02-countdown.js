/*
  Countdown Function

  - Takes a number as input.
  - Iterates from the input number down to 1.
  - Logs each number to the console.
*/
var countdown = function(num) {
    // Iterate from num down to 1
  for (let i = num; i > 0; i--) {
      // Log each number to the console
      console.log(i);
  }
};
// Example usage: Countdown from 10
countdown(10);