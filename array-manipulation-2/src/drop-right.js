/* exported dropRight */
// Direction reworded: Return a new array that only contains the first # of elements from inputted array. That number is the total length of the array subtracted by second argument.
// Rule(s) to follow: Do not mutate the input array.
// 1. Create a new empty array that will be returned at the end of the function.
// 2. Create a for loop with the condition being all the way up to array.length - second argument.
// 3. Push each element into the empty array created in step 1.
// 4. Return the array from step 1 that is no longer empty.

function dropRight(array, count) {
  const newArray = [];
  for (let i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
