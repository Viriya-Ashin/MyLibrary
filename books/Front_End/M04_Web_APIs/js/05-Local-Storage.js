/*
  JavaScript for Form Submission and Local Storage

  - Retrieves input elements by their IDs.
  - Adds a click event listener to the sign-up button.
  - Prevents the default form submission behavior.
  - Creates a user object with trimmed input values.
  - Stores the user object in local storage as JSON.
*/
// Retrieve input elements by their IDs
var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
// Add event listener to the sign-up button
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  // Create a user object with trimmed input values
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  }

  localStorage.setItem("user", JSON.stringify(user));

});


