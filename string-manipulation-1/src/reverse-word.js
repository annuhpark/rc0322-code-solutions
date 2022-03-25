/* exported reverseWord */
// Directions reworded: Reverse the inputted string and return a string.
// 1. Create an empty array that will be returned at the end of the function.
// 2. Create a for loop that iterates through each string, but from right to left.
// 3. Push each letter into the empty array created in step 1.
// 4. Use the join method to change this array into a string.
function reverseWord(word) {
  const newArray = [];
  for (let i = word.length - 1; i >= 0; i--) {
    newArray.push(word[i]);
  }
  return newArray.join('');
}
