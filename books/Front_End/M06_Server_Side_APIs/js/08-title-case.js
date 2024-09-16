// Function to capitalize the first letter of each word in a given string `str`
// The goal is to return a new string where each word starts with a capital letter (title case format)

var titleCase = function(str) {
    // Initialize an empty array `result` to store the modified words
    var result = [];

    // Split the input string into an array of words, using a space as the delimiter
    // Example: 'hello world' becomes ['hello', 'world']
    var words = str.split(' ');

    // Loop through each word in the `words` array
    for (var i = 0; i < words.length; i++) {
        // Split the current word into an array of characters
        // Example: 'hello' becomes ['h', 'e', 'l', 'l', 'o']
        var word = words[i].split('');

        // Convert the first character of the word (index 0) to uppercase
        word[0] = word[0].toUpperCase();

        // Join the characters back into a word and push the capitalized word into the `result` array
        // Example: ['H', 'e', 'l', 'l', 'o'] becomes 'Hello', and is added to `result`
        result.push(word.join(''));
    }

    // Join all the capitalized words in the `result` array into a single string, with spaces between words
    // Example: ['Hello', 'World'] becomes 'Hello World'
    return result.join(' ');
};

// Example usage:
titleCase('hello world');  // Returns 'Hello World'
