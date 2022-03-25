/* exported getKeys */
// Direction reworded: Get the entire list of properties or keys from an inputted object.
// 1. Create an empty array to return at the end of the function.
// 2. Use a for in loop to loop through the properties of an object.
// 3. Use the push method to push each of the property names into the empty array created in step 1.
// 4. Return the array created from step 1 that is no longer empty.

function getKeys(object) {
  const finalArray = [];
  for (const x in object) {
    finalArray.push(x);
  }
  return finalArray;
}
