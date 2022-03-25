/* exported toObject */
// Directions reworded: With the given array, use array[0] to indicate property, and array[1] to indicate value of that property. Return an object with that property and value.
// 1. Create an empty object that will be returned from the function at the end.
// 1. Set array[0] equal to the property name of the empty object.
// 2. Set array[1] equal to the value of the property in the object created in step 1.
// 3. Set the object at property equal to value.
// 4. Return the updated object.

function toObject(keyValuePair) {
  const finalObject = {};
  const property = keyValuePair[0];
  const value = keyValuePair[1];
  finalObject[property] = value;
  return finalObject;
}
