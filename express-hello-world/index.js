const express = require('express');
const app = express();

app.use((req, res) => {
  // eslint-disable-next-line no-console
  console.log(`${req.method}`);
  res.send('I do not understand this');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
