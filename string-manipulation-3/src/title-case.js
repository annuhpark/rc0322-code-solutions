/* exported titleCase */
// Direction reworded: return string with every word capitalized, excluding minor words, JavaScript, and API.
// Conditions: Javascript & API can only be hard-coded.
// 1. Convert entire string into lower case letters.
// 2. Separate the string if it has a colon (treat a colon as a start of new sentence).
// 3. (should return 2 arrays if there is a colon, 1 if there isn't)
// 4. Pass each array through a loop that capitalizes each word
// 5. First word in string gets capitalized, any letter after a space gets capitalized, any letter after a dash gets capitalized.
// 6. Every other letter is lower case.
// 7. pass each array through a loop that checks for any 'minor' words, or if the word is javascript or api.
// 8. need to create array containing 'minor' words.
// 9. skip the first word of each array(first word of each sentence).
// 10. every word after gets checked and converted to lowercase if they match 'minor' word.

function titleCase(title) {
  const lowerTitle = title.toLowerCase();
  let titleCaseArray = lowerTitle.split(': ');
  for (let x = 0; x < titleCaseArray.length; x++) {
    titleCaseArray[x] = makeTitle(titleCaseArray[x]);
  }
  for (let y = 0; y < titleCaseArray.length; y++) {
    titleCaseArray[y] = checkSpecialWords(titleCaseArray[y]);
  }
  titleCaseArray = titleCaseArray.join(': ');
  return titleCaseArray;
}

function makeTitle(string) {
  var titleString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === ' ' || string[i - 1] === '-') {
      titleString += string[i].toUpperCase();
    } else {
      titleString += string[i];
    }
  }
  return titleString;
}

function checkSpecialWords(string) {
  var minorWords = ['And', 'Or', 'But', 'A', 'An', 'The', 'As', 'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  var split = string.split(' ');
  for (var x = 1; x < split.length; x++) {
    if (minorWords.includes(split[x])) {
      split.splice(x, 1, split[x].toLowerCase());
    }
  }
  for (let y = 0; y < split.length; y++) {
    if (split[y] === 'Javascript') {
      split.splice(y, 1, 'JavaScript');
    } else if (split[y] === 'Api') {
      split.splice(y, 1, 'API');
    }
  }
  split = split.join(' ');
  return split;
}
