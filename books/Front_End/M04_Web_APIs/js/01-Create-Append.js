// Reference to the body of the document
var body = document.body;
// Create heading element
var h1El = document.createElement("h1");
// Create container div for image and text
var infoEl = document.createElement("div");
// Create image element
var imgEl = document.createElement("img");
// Create text element for kitten description
var kittenEl = document.createElement("div");
// Create text element for kitten's name
var nameEl = document.createElement("div");
// Create text element for favorite foods section
var favoriteEl = document.createElement("div");
// Create ordered list element for favorite foods
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Set text content for the heading
h1El.textContent = "Welcome to my page";
// Set text content for the kitten description
kittenEl.textContent = "This is my cute cat 🐱.";
// Set text content for the kitten's name
nameEl.textContent = "His name is Taddy.";
// Set text content for the favorite foods section
favoriteEl.textContent = "My favorite foods are:";
// Set text content for each list item
li1.textContent = "Cherry 🍒";
li2.textContent = "Noodle 🍜";
li3.textContent = "Chicken 🍗";
li4.textContent = "Burger 🍔";

// Append header to the body
body.appendChild(h1El);
// Append information container to the body
body.appendChild(infoEl);
// Append image and text elements to the information container
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
// Append favorite foods container to the body
body.appendChild(favoriteEl);
// Append ordered list to the favorite foods container
favoriteEl.appendChild(listEl);
// Append list items to the ordered list
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);



// Set styles for header element
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// Set styles for information container
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// Set source for the image element
imgEl.setAttribute("src", "http://placekitten.com/200/300");
// Set styles for kitten's name container
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
// Set styles for kitten description container
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
// Set styles for favorite foods container
favoriteEl.setAttribute("style", "font-size:20px;");

// Set styles for ordered list
listEl.setAttribute("style", "background:#333333; padding:20px;");

// Set styles for each list item
li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
