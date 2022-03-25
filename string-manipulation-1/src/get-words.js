/* exported getWords */
// Directions reworded: Separate each string into an array consisting of each word from that string.
// Use the split method to return every element by word (distinguished by space) into an element in an array.
// This words for all the test functions, except the last one in which the argument is an empty string.
// For this specific one, use hard-coding to indicate that the split should NOT happen where there is a space; rather, it should just apply to each element in the string.

function getWords(string) {
  if (string === '') {
    return string.split('');
  } else {
    const newArray = string.split(' ');
    return newArray;
  }
}
