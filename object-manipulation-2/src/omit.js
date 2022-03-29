/* exported omit */
// Direction reworded: Return a new object that returns only property and value that is NOT mentioned in inputted array of 2nd argument.
// 1. Create a copy of the inputted object using the spread operator.
// 2. Create a for in loop that loops through the inputted object of 1st argument.
// 3. Create another for loop within the for in loop that loops through every element of array in 2nd argument.
// 4. Create an if statement that indicates that if one of the elements in the array are one of the property names of the inputted object, continue with the for loop.
// 5. If one of the elements is one of the property names in inputted object, delete that from the copied object.
// 6. Return the copied object from step 1.

function omit(source, keys) {
  const returnedObject = { ...source };
  // console.log(returnedObject);
  for (const x in returnedObject) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === x) {
        delete returnedObject[x];
      }
    }
  }
  return returnedObject;
}
