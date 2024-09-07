// Cache references to the form and list elements for easy access and performance optimization.
var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  // Prevent the default form submission, which would cause a page reload.
  event.preventDefault();

  // Get the value from the input field with name="shopping-input".
  var shoppingItem = $('input[name="shopping-input"]').val();

  // If the input is empty, log a message and exit the function early.
  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  // Create a new list item with Bootstrap classes for styling.
  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  // Set the text of the list item to the shopping item provided by the user.
  shoppingListItemEl.text(shoppingItem);

  // Add a "Remove" button to the list item, allowing for item deletion.
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // Append the newly created list item to the shopping list displayed on the page.
  shoppingListEl.append(shoppingListItemEl);

  // Clear the input field after the item has been added to the list.
  $('input[name="shopping-input"]').val('');
}

// TODO: Implement the function to handle item removal from the shopping list.
// This function will be called when the "Remove" button is clicked.
function handleRemoveItem(event) {
  // Identify the button that was clicked and remove its parent list item from the DOM.
  var btnClicked = $(event.target);
  btnClicked.parent('li').remove();
}

// TODO: Implement event delegation to handle the click event on the "Remove" button.
// Attach a click event listener to the shopping list element, targeting any future elements with the class `.delete-item-btn`.
// This ensures that dynamically added buttons will be handled correctly.
shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);

// Attach a submit event listener to the form to handle adding new items to the shopping list.
shoppingFormEl.on('submit', handleFormSubmit);
