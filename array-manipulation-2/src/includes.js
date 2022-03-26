/* exported includes */
// Direction reworded: Check to see if the value in the second argument is an element in the array in the first argument.
// Rule(s) to follow: Do not use array.prototype.includes method.
// 1. Use a for loop to look at every element in the array from the first argument.
// 2. Create an if statement within the for loop using the indexOf method to check if the string from second argument is in array from first argument.
// 3. Return true or false depending on element.

function includes(array, value) {
  if (array.indexOf(value) === -1) {
    return false;
  } else {
    return true;
  }
}
