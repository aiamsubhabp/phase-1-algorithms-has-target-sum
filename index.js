function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  runtime: O(n^2)
  space: O(n)


*/

/* 
  Add your pseudocode here
  Iterate thru each number in the array.
  For the current number, identify the complement... i.e. target - current number.
  Iterate thru rest of the array. if the complement exists, return true
  If end of array is reached and complement is not found, return false.
*/

/*
  Add written explanation of your solution here
  WIthin this function, there exists a for loop that iterates through each number in the array. 
  for the current number, the complement is identified.
  Within this for loop, there is another for loop that iterates through the remaining numbers in the array
  each number in this iteration is compared to the complement.
  if the complement is found, then the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
