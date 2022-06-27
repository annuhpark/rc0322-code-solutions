const input = process.argv[2];
const fs = require('fs');
const data = require('./data.json');

if (input === 'read') {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
} else if (input === 'create') {
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
  console.log(data.nextId, data.notes);
  dataUpdate();
} else if (input === 'delete') {
  const id = process.argv[3];
  delete data.notes[id];
  console.log(data.notes);
  dataUpdate();
} else if (input === 'replace') {
  const id = process.argv[3];
  const value = process.argv[4];
  data.notes[id] = value;
  dataUpdate();
  console.log(data.notes);
}

function dataUpdate() {
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      throw err;
    }
  });
}
