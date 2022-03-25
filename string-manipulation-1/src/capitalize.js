/* exported capitalize */
// Directions reworded: The inputted string is a word or letter. In the function, that string must be returned with ONLY the first letter capitalized, the rest lowercased.
// 1. Use the slice method to divide the first letter of the word from the rest of the letters.
// 2. Lowercase the rest of the letters, not the first letter. Set these into their own variables.
// 3. In the return statement, concatenate the two separate strings.

function capitalize(word) {
  const secondHalf = word.slice(1).toLowerCase();
  const firstLetter = word.slice(0, 1).toUpperCase();
  return firstLetter + secondHalf;
}
