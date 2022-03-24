/* exported reverse */
// Directions reworded: An array is inputted as an argument to the function. Return an array that has completely reversed elements from the input array.
// Rules: Do not use the reverse method on this function.
// 1. Create an empty array that will be used to be returned from the function at the very end.
// 2. Create a for loop that starts from the very last element of the inputted array, and decrements by 1 element at each iteration.
// 3. Push each element into the empty array created in step 1.
// 4. Return the new array that is no longer empty.

function reverse(array) {
  const finalArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
