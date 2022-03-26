/* exported drop */
// Direction reworded: From an inputted array (first argument), use the second argument numeric value to subtract the number of elements from left to right.
// Rule(s) to follow: Do not mutate the input array.
// 1. Create a new, empty array. This array will be returned at the end of the function.
// 2. Create a for loop that loops over each element in the inputted array.
// 3. Use hard-coding to create an if statement for an empty array input. For those situations, return the empty array as is.
// 4. Use the second argument numeric value to create an if statement for the first # of elements, and to continue looping over them.
// 5. For the elements that are past the numeric value of the second argument, push those elements onto the empty array created in step 1.
// 6. Return the array that is no longer empty.

function drop(array, count) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) {
      return array;
    } else if (i < count) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
