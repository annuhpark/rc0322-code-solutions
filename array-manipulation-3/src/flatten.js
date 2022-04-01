/* exported flatten */
// Direction reworded: Return a new array which 'flattens' the inputted array, but only by one level. If it is an array within an array within an array, that element should still be an array within an array.
// Additional rule: Cannot use array.prototype.flat in your code.
// Hint: Test whether or not an element within an array is an array with 'Array.isArray()'.
// 1. Create an empty array that will be returned at the end of the function.
// 2. Loop through each element in the inputted array.
// 3. Follow that with an if statement that indicates that if the element is an array, to eliminate that array by using the spread operator, and push that new value into the empty array created in step one.
// 4. If the element is not array, push the element as is into the array created from step one.
// 5. Return the updated array created from step one.

function flatten(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(Array.isArray(array[i]));
    if (Array.isArray(array[i])) {
      newArray.push(...array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
