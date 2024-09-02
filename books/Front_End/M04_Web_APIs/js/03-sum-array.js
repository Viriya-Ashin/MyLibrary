/*
  Sum Array Function

  - Takes an array of numbers as input.
  - Initializes a variable 'result' to store the sum.
  - Iterates through the array and adds each element to 'result'.
  - Returns the final sum of the array elements.

  Example:
  - Calling sumArray([3, 1, 5, 6]) will return 15.
*/

var sumArray = function(arr) {
    var result = 0; // Initialize result variable to store sum
  
    // Loop through the array and add each element to 'result'
    for (var i = 0; i < arr.length; i++) {
      var currentNumber = arr[i];
      result += currentNumber; // Add current element to result
    }
  
    return result; // Return the final sum
  };
  
  // Example usage: Sum the elements of [3, 1, 5, 6]
  sumArray([3, 1, 5, 6]);
  