// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

// This function sends a GET request to the GitHub API endpoint using the fetch() method
// The query parameter `per_page=5` limits the result to 5 issues.
fetch(requestUrl)
  .then(function (response) {
    // The response is returned as a JSON object to make the data easier to work with.
    return response.json();
  })
  .then(function (data) {
    // Log a heading message to the console for clarity when reviewing the results.
    console.log('Github Repo Issues \n----------');
    
    // Iterates through the array of issues in the response data.
    for (var i = 0; i < data.length; i++) {
      // Log each issue's URL to the console.
      console.log(data[i].url);
      // Log the username of the person who created the issue.
      console.log(data[i].user.login);
    }
    
    // Log the full data array for debugging or further analysis.
    console.log(data);
  });
