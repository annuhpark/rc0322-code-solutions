/* exported lastChars */
// Directions reworded: Return part of the inputted string (determined by the 1st argument in function call), but ordering from right to left.
// 1. Use the slice method, but work from backwards (right to left) by changing the given number represented from the first argument into a negative number.

function lastChars(length, string) {
  return string.slice(-length);
}
