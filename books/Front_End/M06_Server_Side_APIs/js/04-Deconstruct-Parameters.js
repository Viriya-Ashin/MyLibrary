fetch(
    // TODO: Add query parameters to the URL such that the number of issues returned is limited to 10.
    // TODO: Add a `sort` parameter to sort the issues by `createdAt` in descending order.
    // Hint: use & to join multiple query parameters. Use `=` to join key and value.
    'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
  // Parameter explanation.
  // The per_page parameter limits the number of results displayed per page.
  // The state parameter indicates the current status of the issue, which can be open, closed, or all.
  // The sort parameter arranges the results based on the specified criteria, such as creation date, update date, or number of comments.
  // The direction parameter determines the sorting order.
  