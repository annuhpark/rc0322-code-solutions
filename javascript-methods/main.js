var kuma = 1;
var lana = 0;
var hama = 16;
var maximumValue = Math.max(kuma, lana, hama);
console.log(maximumValue);

var heroes = ['mom', 'dad', 'sister', 'myself'];
var randomNumber = Math.random() * heroes.length;
// Math.floor returns an integer, no decimals.
var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];
console.log(randomIndex, randomHero);

var library = [
  {
    title: 'Crying in H Mart',
    author: 'Michelle Zauner'
  },
  {
    title: "Sorry I'm Late, I Didn't Want to Come",
    author: 'Jessica Pan'
  },
  {
    title: 'What If? Serious Scientific Answers to Absurd Hypothetical Questions',
    author: 'Randall Munroe'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Anna Park';
var firstAndLastName = fullName.split(' ');
console.log('first and last name:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('say my name:', sayMyName);
