/* exported getValues */
// Direction reworded: Get the values of each property inside of a given object.
// 1. Create an empty array that will be returned at the end of the function.
// 2. Create a for in loop to iterate through every property in the given object.
// 3. Using the bracket method, get the value of each property of the given object.
// 4. Push each value into the empty array created in step 1.
// 5. Return the array from step 1 that is no longer empty.

function getValues(object) {
  const finalArray = [];
  for (const x in object) {
    finalArray.push(object[x]);
  }
  return finalArray;
}
