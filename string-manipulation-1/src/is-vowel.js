/* exported isVowel */
function isVowel(character) {
  const lowerCased = character.toLowerCase();
  if (lowerCased === 'a' || lowerCased === 'e' || lowerCased === 'i' || lowerCased === 'o' || lowerCased === 'u') {
    return true;
  }
  return false;
}
