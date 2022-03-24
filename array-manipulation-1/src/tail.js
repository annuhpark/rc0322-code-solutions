/* exported tail */
// Direction reworded: The return value must be an array containing all elements from the inputted array (as argument), with the exception of the 1st one.
// Rules to follow: Cannot use slice, splice or shift method to create our function.
// 1. Create an empty array to return at the end of our function.
// 2. Use the for loop to loop over each element in the inputted aray.
// 3. Make sure to exclude the very first element from this loop iteration.
// 4. Push these elements onto the empty array created on step one.
// 5. Return the new array from the function.

function tail(array) {
  const finalArray = [];
  for (let i = 1; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
