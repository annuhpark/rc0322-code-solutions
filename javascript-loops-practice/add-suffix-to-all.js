/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    const addedSuffix = words[i] + suffix;
    newArray.push(addedSuffix);
  }
  return newArray;
}
