/* exported firstChars */
function firstChars(length, string) {
  const newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push(string[i]);
  }
  return newArray.join('');
}
