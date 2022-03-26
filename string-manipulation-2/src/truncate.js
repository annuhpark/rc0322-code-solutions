/* exported truncate */
function truncate(length, string) {
  const finalArray = [];
  for (let i = 0; i < length; i++) {
    finalArray.push(string[i]);
  }
  const finalString = finalArray.join('');
  return finalString + '...';
}
