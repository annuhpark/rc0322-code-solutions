/* exported swapChars */
// Direction reworded: Swap two elements of inputted string determined by the index numbers in first and second argument in function call.
// Comments are taken from specific function call of: swapChars(0, 1, 'lodash');
// 1. Change the string to an array so you can change elements. Strings are immutable so they cannot change.
// 2. Set the element in firstIndex parameter as a variable.
// 3. Create a copy of the value in variable from step 2 without affecting the original.
// 4. Set the element of first index (left of equal sign) equal to the element of second index (right of equal sign). This will change the value of element in first index.
// 5. Set the element of second index (left of equal sign) equal to the variable created in step 2. The variable is not affected from any changes previously, and will change the value of element in second index.
// 6. Use the join method to change from an array to a string.
// 7. Return the string.

function swapChars(firstIndex, secondIndex, string) {
  const stringToArray = string.split('');
  const temp = stringToArray[firstIndex];
  // first Index is 'l' right now.
  stringToArray[firstIndex] = stringToArray[secondIndex];
  // first Index is equal to second Index now, which is 'o'.
  // second Index stays as 'o'.
  // temp has not changed as a variable, and it was 'l' when the variable was declared.
  stringToArray[secondIndex] = temp;
  // temp is 'l', and that is being declared to the second index element.
  return stringToArray.join('');
}
