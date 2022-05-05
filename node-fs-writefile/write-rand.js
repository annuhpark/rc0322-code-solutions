const fs = require('fs');
const data = Math.floor(Math.random() * 200).toString();

fs.writeFile('random.txt', data + '\n', 'utf8', err => {
  if (err) {
    throw err;
  }
});
