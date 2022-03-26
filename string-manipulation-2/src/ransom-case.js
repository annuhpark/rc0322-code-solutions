/* exported ransomCase */
// Directions reworded: Return inputted string with every other letter uppercased, which also means every other letter lowercased.
// 1. lowercase all letters from the inputted string.
// 2. create an empty array.
// 3. Using a for loop, followed by an if statement to indicate even or odd with index number. Odd will have capital letters, even will already be lowercased.
// 4. Push every string into the empty array created in step 2.
// 5. At the end of the for loop, use the join method to change the array back into a string.
// 6. Return the string.

function ransomCase(string) {
  const lowerCased = string.toLowerCase();
  const newArray = [];
  for (let i = 0; i < lowerCased.length; i++) {
    if (i % 2 === 0) {
      newArray.push(lowerCased[i]);
    } else {
      const upperCased = lowerCased[i].toUpperCase();
      newArray.push(upperCased);
    }
  }
  return newArray.join('');
}
