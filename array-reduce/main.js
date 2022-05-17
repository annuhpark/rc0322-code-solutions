const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(sum);

const product = numbers.reduce((previousValue, currentValue) => {
  return previousValue * currentValue;
});
console.log(product);

const transactions = (previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    return previousValue + currentValue.amount;
  }
  if (currentValue.type === 'withdrawal') {
    return previousValue - currentValue.amount;
  }
};
const balance = (account.reduce(transactions, 0));
console.log(balance);

const combiningProperty = (previousValue, currentValue) => {
  return Object.assign(previousValue, currentValue);
};

const composite = traits.reduce(combiningProperty);
console.log(composite);
