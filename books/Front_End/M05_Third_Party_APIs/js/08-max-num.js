// Write code to return the largest number in the given array

// Write code to return the largest number in the given array

function maxNum(arr) {
    if (arr.length === 0) return undefined; // handle empty array case
  
    let max = arr[0]; // initialize max with the first element //Update from [i]
    for (let i = 1; i < arr.length; i++) { // start loop from the second element
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  var arr = [3, 1, 17, 5, 6];
  console.log(maxNum(arr)); // Output: 17