// Selects the <ul> element where the list of repositories will be dynamically inserted
var repoList = document.querySelector('ul');

// Selects the button with the ID 'fetch-button' to trigger the API call when clicked
var fetchButton = document.getElementById('fetch-button');

// Function to fetch the user's repositories from the GitHub API
function getApi() {
  // URL for the GitHub API, targeting a specific user's repositories
  var requestUrl = 'https://api.github.com/users/Viriya-Ashin/repos';

  // Makes an HTTP GET request using the Fetch API to retrieve the data
  fetch(requestUrl)
    .then(function(response) {
      // Parses the JSON response from the API
      return response.json();
    })
    .then(function(data) {
      // Loops through each repository object in the returned data array
      for (var i = 0; i < data.length; i++) {
        // Creates a new <li> element for each repository
        var listItem = document.createElement('li');

        // Sets the text content of the list item to the repository's URL (html_url)
        listItem.textContent = data[i].html_url;

        // Appends the created <li> to the <ul> element, dynamically displaying each repo in the list
        repoList.appendChild(listItem);
      }
    });
}

// Adds an event listener to the fetch button, calling the getApi function when the button is clicked
fetchButton.addEventListener('click', getApi);
