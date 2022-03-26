/* exported numVowels */
// Direction reworded: Count how many vowels are in the inputted string.
// 1. Make the inputted string all have lowercase letters.
// 2. Create a variable set to numeric value of 0.
// 3. Create a for loop followed by an if statement to check whether or not each letter is a vowel.
// 4. If true, increment the variable by 1 created in step 2.
// 5. If false, continue.

function numVowels(string) {
  const lowerCasedString = string.toLowerCase();
  let finalNumber = 0;
  for (let i = 0; i < lowerCasedString.length; i++) {
    if (lowerCasedString[i] === 'a' || lowerCasedString[i] === 'e' || lowerCasedString[i] === 'i' || lowerCasedString[i] === 'o' || lowerCasedString[i] === 'u') {
      finalNumber++;
    } else {
      continue;
    }
  }
  return finalNumber;
}
