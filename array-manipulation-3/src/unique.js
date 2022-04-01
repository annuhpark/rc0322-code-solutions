/* exported unique */
// Direction reworded: Only include unique elements in the returned array, aka cannot repeat same elements.
// 1. Use the set and new method as well as spread operator to create a new array that only has unique elements.
// 2. Return the new array from the function.

function unique(array) {
  var uniqueArray = [...new Set(array)];
  return uniqueArray;
}
