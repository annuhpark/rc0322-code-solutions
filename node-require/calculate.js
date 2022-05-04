const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

// console.log(add);
// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);
const firstNum = parseInt(process.argv[2]);
const secondNum = parseInt(process.argv[4]);

if (process.argv[3] === 'plus') {
  add(firstNum, secondNum);
} else if (process.argv[3] === 'minus') {
  subtract(firstNum, secondNum);
} else if (process.argv[3] === 'over') {
  divide(firstNum, secondNum);
} else if (process.argv[3] === 'times') {
  multiply(firstNum, secondNum);
}
