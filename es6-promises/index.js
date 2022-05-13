const takeAChance = require('./take-a-chance');
const anna = takeAChance('Anna');

anna.then(message => {
  console.log(message);
});
anna.catch(e => {
  console.log(e.message);
});
