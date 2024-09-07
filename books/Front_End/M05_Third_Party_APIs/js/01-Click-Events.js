// jQuery selectors for elements with IDs 'password-btn' and 'password-display'
var passwordBtnEl = $('#password-btn');    // Selecting the button element with ID 'password-btn'
var passwordDisplayEl = $('#password-display');  // Selecting the display element with ID 'password-display'

// Function to return a random character including alphanumeric and special character values
function getPasswordCharacter() {
  // Generates a random character code between 34 and 110 (inclusive) using Math.random() and String.fromCharCode()
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Function to generate a password string of concatenated characters of a specified length
function passwordGenerator(num) {
  var password = '';  // Initialize an empty string to hold the generated password
  for (var i = 0; i < num; i++) {  // Loop 'num' times to generate 'num' characters
    password += getPasswordCharacter();  // Append a random character to the password string
  }
  return password;  // Return the generated password
}

// Event listener for a double-click event on the password button element
passwordBtnEl.on('dblclick', function () {
  var newPassword = passwordGenerator(15);  // Generate a new password of length 15
  passwordDisplayEl.text(newPassword);  // Display the new password in the password display element

});



