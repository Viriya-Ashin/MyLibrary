// Function to calculate the factorial of a given number `num`
// A factorial of a number (denoted as `n!`) is the product of all positive integers from `n` down to 1.
// Example: 5! = 5 * 4 * 3 * 2 * 1 = 120

var factorial = function(num) {
    // Initialize a variable `result` to store the cumulative product of numbers
    var result = 1;  // Starting from 1 because multiplying by 1 does not change the result

    // Use a for loop to iterate from `num` down to 2 (no need to multiply by 1, as it's the same)
    for (var i = num; i > 1; i--) {
        // Multiply `result` by the current value of `i` and update `result`
        result = result * i;  // For example, when `num` is 5, this will do: 1 * 5 -> 5 * 4 -> 20 * 3 -> 60 * 2 -> 120
    }

    // Return the final value of `result` which is the factorial of `num`
    return result;
};

// Example usage: Calculate the factorial of 5
factorial(5);  // The result will be 120, as 5! = 5 * 4 * 3 * 2 * 1
