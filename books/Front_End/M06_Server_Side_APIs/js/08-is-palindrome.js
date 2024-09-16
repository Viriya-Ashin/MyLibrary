// Function to check if a given string `str` is a palindrome
// A palindrome is a word, phrase, or number that reads the same forward and backward (e.g., 'radar', 'level', 'racecar', '101')
var isPalindrome = function(str) {
    // Convert the string into an array of characters, reverse the array, and then join it back into a string
    // This will give us the reversed version of the input string
    var reversedString = str
        .split('')  // Split the string into an array of characters: e.g., 'radar' becomes ['r', 'a', 'd', 'a', 'r']
        .reverse()  // Reverse the array: ['r', 'a', 'd', 'a', 'r'] remains the same for 'radar' (a palindrome)
        .join('');  // Join the array back into a string: ['r', 'a', 'd', 'a', 'r'] becomes 'radar'

    // Check if the reversed string is the same as the original string
    if (reversedString === str) {
        return true; // If the strings are equal, return `true` (it's a palindrome)
    } else {
        return false; // If the strings are not equal, return `false` (it's not a palindrome)
    }
};
