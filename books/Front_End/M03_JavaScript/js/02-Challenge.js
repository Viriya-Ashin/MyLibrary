// Select the button with the ID "generate" and store it in the variable 'generateBtn'
var generateBtn = document.querySelector("#generate");

// Add an event listener to the 'generateBtn' to trigger the 'writePassword' function on click
generateBtn.addEventListener("click", writePassword);

// Function to handle the process of writing the generated password to the text area
function writePassword() {
  // Call the generatePassword function and store the result in the 'password' variable
  var password = generatePassword();
  
  // Select the text area with the ID "password" to display the generated password
  var passwordText = document.querySelector("#password");
  
  // Set the value of the text area to the generated password
  passwordText.value = password;
}

// Function to generate a random password based on user-selected criteria
function generatePassword() {
  let passwordLength;          // Variable to store the length of the password
  let includeUpperCase;        // Variable to determine if uppercase letters should be included
  let includeLowerCase;        // Variable to determine if lowercase letters should be included
  let includeNumber;           // Variable to determine if numbers should be included
  let includeSpecialCharacter; // Variable to determine if special characters should be included

  // Prompt the user to input the desired password length between 8 and 128 characters
  passwordLength = parseInt(prompt("Write a number from 8 to 128"));
  
  // Confirm dialogs to ask the user whether to include different character types
  includeUpperCase = confirm("Include UpperCase?");
  includeLowerCase = confirm("Include LowerCase?");
  includeNumber = confirm("Include Numbers?");
  includeSpecialCharacter = confirm("Include Special Characters?");

  // Validate the user input for password length; if invalid, alert and exit the function
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return ""; // Return an empty string if the input is invalid
  }

  // Ensure that at least one character type is selected; if not, alert and exit the function
  if (!includeUpperCase && !includeLowerCase && !includeNumber && !includeSpecialCharacter) {
    alert("You must select at least one character type.");
    return ""; // Return an empty string if no character type is selected
  }

  // Initialize an empty string to hold all possible characters for the password
  let availableChar = "";
  
  // Concatenate the character sets to the availableChar string based on the user's choices
  if (includeUpperCase) {
    availableChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowerCase) {
    availableChar += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumber) {
    availableChar += "0123456789";
  }
  if (includeSpecialCharacter) {
    availableChar += "!@#$%&*+(){}[]=_?/<>";
  }

  // Initialize an empty string to build the generated password
  let password = "";
  
  // Loop through the desired password length and add random characters from availableChar
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableChar.length);
    password += availableChar.charAt(randomIndex);
  }

  // Return the final generated password
  return password;
}




