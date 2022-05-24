const express = require('express');
const app = express();
const path = require('path');

const pathway = path.join(__dirname, 'public');
app.use(express.static(pathway));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
