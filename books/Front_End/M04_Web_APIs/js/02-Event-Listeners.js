// Initialize counter value to 0
var count = 0;
// Select increment and decrement button elements
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// Function to update the count display
function setCounterText() {
  countEl.textContent = count;
}
// Attach event listener to increment button element
incrementEl.addEventListener('click', function() {
  // Increase count by 1 and update the display
  count++;
  setCounterText();
});

// Attach event listener to decrement button element
decrementEl.addEventListener('click', function() {
  // Decrease count by 1 if count is greater than 0, and update the display
  if (count > 0) {
    count--;
    setCounterText();
  }
});
