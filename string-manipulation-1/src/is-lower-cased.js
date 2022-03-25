/* exported isLowerCased */
// Drection reworded: Determine whether or not the inputted string contains any uppercased letters. If yes, return false. If not, return true.
// Something to point out: Miscellaneous characters do not count, such as a hyphen or spaces. They can be overlooked.
// 1. Create a for loop that loops over every element in the string, letter or not.
// 2. If there are non-letter elements, simply continue on with the for loop.
// 3. If there is a capital letter, immediately return false.
// 4. Loop through the entire string, and if there seems to be capital letters, return true.

function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '-' || word[i] === ' ') {
      continue;
    } else if (word[i] === word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
