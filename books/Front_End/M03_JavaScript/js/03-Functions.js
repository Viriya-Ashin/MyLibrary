// Function to compare two values for equality
function checkEqual (v1, v2){
    // Check if v1 and v2 are strictly equal in types and values
    if (v1 === v2){
        console.log("They are equal in types and values");
    } 
    // Check if v1 and v2 are equal in values (loose comparison)
    else if (v1 == v2){
        console.log("They are equal in values");
    } 
    // If v1 and v2 are not equal in either type or value
    else {
        console.log("They are Not equal");
    }
};
// Call the checkEqual function with example values to test
checkEqual(100, 100);