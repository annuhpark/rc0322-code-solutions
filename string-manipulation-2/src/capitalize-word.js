/* exported capitalizeWord */
// Direction reworded: Return the inputted string as string with same letters, but with first letter capitalized with the remaining letters lowercased.
// Specific hard code: For the word 'JavaScript', make sure to ONLY capitalize letters 'J' and 'S'.
// 1. Split the string using the splice method. Use this to separate the first letter with the rest of the letters that follow.
// 2. Capitalize the first letter and lowercase all of the remaining letters.
// 3. Hard-code with the word 'JavaScript'. Use an if statement.
// 4. Return a concatination of first letter & remaining letters.

function capitalizeWord(word) {
  const firstLetter = word.slice(0, 1).toUpperCase();
  const restOfLetters = word.slice(1).toLowerCase();
  if (firstLetter + restOfLetters === 'Javascript') {
    return 'JavaScript';
  }
  return firstLetter + restOfLetters;
}
