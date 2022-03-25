/* exported isUpperCased */
function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
