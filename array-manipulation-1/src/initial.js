/* exported initial */
// Directions reworded: Just like the tail function, return a new array consisting of all of the elements from inputted array, with the exception of the last element.
// Rules to follow: Cannot use slice, splice, pop or shift method in our function.
// 1. Create an empty array that will be returned at the end of our function.
// 2. Create a for loop that loops through all of the elements in the inputted array (array used as argument), but make sure it does not loop over the last element.
// 3. Push each element as we are looping over onto the empty array we created in step 1.
// 4. Return the new array that is no longer empty.

function initial(array) {
  const finalArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
